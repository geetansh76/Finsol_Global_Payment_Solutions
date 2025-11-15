"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Header from "@/components/Home/Header/Header";
import styles from "./developers.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";

// Base API
const BASE = "http://192.168.1.11:5000/development/filter";

const buildUrl = (params) => {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => v && qs.set(k, v));
  const s = qs.toString();
  return s ? `${BASE}?${s}` : BASE;
};

const getParam = (sp, key) => sp.get(key) || "";

/** ======== Generic parser for simple steps (strings / simple objects) ======== */
const parseOptionsFromData = (json) => {
  if (!json || !Array.isArray(json.data)) return [];

  return json.data
    .map((item) => {
      if (typeof item === "string" || typeof item === "number") {
        const s = String(item);
        return { label: s, value: s };
      }

      if (item && typeof item === "object") {
        if (item.label && item.value) {
          return { label: String(item.label), value: String(item.value) };
        }

        const label =
          item.name ?? item.label ?? item.code ?? String(item.id ?? "");
        const value =
          item.value ?? item.code ?? item.name ?? String(item.id ?? label);
        return { label: String(label), value: String(value) };
      }

      return null;
    })
    .filter(Boolean);
};

const parseIntegrationTypeOptions = (json) => parseOptionsFromData(json);
const parseApiVersionOptions = (json) => parseOptionsFromData(json);

const parseCurrencyOptions = (json) => {
  if (!json || !Array.isArray(json.data)) return [];

  return json.data
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const label = item.name ?? String(item.id ?? "");
      const value = item.id != null ? String(item.id) : String(item.name ?? "");
      return { label, value };
    })
    .filter(Boolean);
};

const parsePayModeOptions = (json) => {
  if (!json || !Array.isArray(json.data)) return [];

  return json.data
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const label = item.name ?? item.display_name ?? String(item.id ?? "");
      const value = item.id != null ? String(item.id) : String(item.name ?? "");
      return { label, value };
    })
    .filter(Boolean);
};

const parseSubPayModeOptions = (json) => {
  if (!json || !Array.isArray(json.data)) return [];

  return json.data
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const label = item.name ?? item.display_name ?? String(item.id ?? "");
      const value = item.id != null ? String(item.id) : String(item.name ?? "");
      return { label, value };
    })
    .filter(Boolean);
};

const parseFinalResults = (json) => {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (Array.isArray(json.data)) return json.data;
  return [];
};

async function fetchJSON(url, { signal } = {}) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    signal,
  });

  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export default function Developers() {
  // Section nav
  const [active, setActive] = useState("overview");
  const overviewRef = useRef(null);
  const prereqRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "overview", el: overviewRef.current },
      { id: "prereq", el: prereqRef.current },
    ].filter((s) => !!s.el);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        }),
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 1] }
    );

    sections.forEach((s) => io.observe(s.el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ---------------- Cascading filter state ----------------
  const sp = useMemo(
    () =>
      new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : ""
      ),
    []
  );

  // Selected values (hydrate from URL if present)
  const [service, setService] = useState(getParam(sp, "service"));
  const [integration, setIntegration] = useState(
    getParam(sp, "integration_type")
  );
  const [apiVersion, setApiVersion] = useState(getParam(sp, "api_version"));
  const [currency, setCurrency] = useState(getParam(sp, "currency"));
  const [payMode, setPayMode] = useState(getParam(sp, "pay_mode"));
  const [subPayMode, setSubPayMode] = useState(getParam(sp, "sub_pay_mode"));

  // Option lists
  const [serviceOptions] = useState([
    { label: "PayIn", value: "PayIn" },
    { label: "PayOut", value: "PayOut" },
  ]);
  const [integrationOptions, setIntegrationOptions] = useState([]);
  const [apiOptions, setApiOptions] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [payModeOptions, setPayModeOptions] = useState([]);
  const [subPayModeOptions, setSubPayModeOptions] = useState([]);

  // Loading/error flags
  const [loading, setLoading] = useState({
    integration: false,
    api: false,
    currency: false,
    payMode: false,
    subPayMode: false,
    results: false,
  });

  const [error, setError] = useState("");

  // Final results (list-based)
  const [results, setResults] = useState([]);

  // HTML + CSS returned by API for the final view
  const [finalHtml, setFinalHtml] = useState("");
  const [finalCss, setFinalCss] = useState("");

  // Helper: are we in PayOut mode?
  const isPayOut = service === "PayOut";

  /** Keep URL in sync with selected values */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = {
      service,
      integration_type: isPayOut ? "" : integration, // no integration in URL for PayOut
      api_version: apiVersion,
      currency,
      pay_mode: payMode,
      sub_pay_mode: subPayMode,
    };

    const url = buildUrl(params);
    const newQuery = url.includes("?") ? url.slice(url.indexOf("?")) : "";
    const newUrl = `${window.location.pathname}${newQuery}`;
    window.history.replaceState({}, "", newUrl);
  }, [service, integration, apiVersion, currency, payMode, subPayMode, isPayOut]);

  /** Reset downstream selections */
  useEffect(() => {
    setIntegration("");
    setApiVersion("");
    setCurrency("");
    setPayMode("");
    setSubPayMode("");

    setIntegrationOptions([]);
    setApiOptions([]);
    setCurrencyOptions([]);
    setPayModeOptions([]);
    setSubPayModeOptions([]);
    setResults([]);
    setFinalHtml("");
    setFinalCss("");
    setError("");
  }, [service]);

  useEffect(() => {
    // Only reset on integration change when PayIn (PayOut doesn’t use integration)
    if (!integration || isPayOut) return;

    setApiVersion("");
    setCurrency("");
    setPayMode("");
    setSubPayMode("");

    setApiOptions([]);
    setCurrencyOptions([]);
    setPayModeOptions([]);
    setSubPayModeOptions([]);
    setResults([]);
    setFinalHtml("");
    setFinalCss("");
    setError("");
  }, [integration, isPayOut]);

  useEffect(() => {
    if (!apiVersion) return;
    setCurrency("");
    setPayMode("");
    setSubPayMode("");

    setCurrencyOptions([]);
    setPayModeOptions([]);
    setSubPayModeOptions([]);
    setResults([]);
    setFinalHtml("");
    setFinalCss("");
    setError("");
  }, [apiVersion]);

  useEffect(() => {
    if (!currency) return;
    setPayMode("");
    setSubPayMode("");

    setPayModeOptions([]);
    setSubPayModeOptions([]);
    setResults([]);
    setFinalHtml("");
    setFinalCss("");
    setError("");
  }, [currency]);

  useEffect(() => {
    if (!payMode) return;
    setSubPayMode("");

    setSubPayModeOptions([]);
    setResults([]);
    setFinalHtml("");
    setFinalCss("");
    setError("");
  }, [payMode]);

  /** STEP 1 → 2: Integration Types (PayIn ONLY) */
  useEffect(() => {
    if (!service || isPayOut) return; // No integration step for PayOut

    const controller = new AbortController();

    (async () => {
      try {
        setLoading((s) => ({ ...s, integration: true }));
        setError("");

        const url = buildUrl({ service });
        const json = await fetchJSON(url, { signal: controller.signal });
        const opts = parseIntegrationTypeOptions(json);

        setIntegrationOptions(opts);
        if (integration && !opts.find((o) => o.value === integration)) {
          setIntegration("");
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "Failed to load Integration Types");
        }
      } finally {
        setLoading((s) => ({ ...s, integration: false }));
      }
    })();

    return () => controller.abort();
  }, [service, isPayOut]);

  /** STEP 2: API Versions
   * PayIn: needs service + integration
   * PayOut: needs only service
   */
  useEffect(() => {
    if (!service) return;
    if (!isPayOut && !integration) return; // PayIn still requires integration

    const controller = new AbortController();

    (async () => {
      try {
        setLoading((s) => ({ ...s, api: true }));
        setError("");

        const url = buildUrl(
          isPayOut
            ? { service } // PayOut -> direct API versions
            : { service, integration_type: integration } // PayIn -> old way
        );

        const json = await fetchJSON(url, { signal: controller.signal });
        const opts = parseApiVersionOptions(json);

        setApiOptions(opts);
        if (apiVersion && !opts.find((o) => o.value === apiVersion)) {
          setApiVersion("");
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "Failed to load API Versions");
        }
      } finally {
        setLoading((s) => ({ ...s, api: false }));
      }
    })();

    return () => controller.abort();
  }, [service, integration, isPayOut]);

  /** STEP 3 → 4: Currencies */
  useEffect(() => {
    if (!service || !apiVersion) return;
    if (!isPayOut && !integration) return;

    const controller = new AbortController();

    (async () => {
      try {
        setLoading((s) => ({ ...s, currency: true }));
        setError("");

        const url = buildUrl(
          isPayOut
            ? {
                service,
                api_version: apiVersion,
              }
            : {
                service,
                integration_type: integration,
                api_version: apiVersion,
              }
        );

        const json = await fetchJSON(url, { signal: controller.signal });
        const opts = parseCurrencyOptions(json);

        setCurrencyOptions(opts);
        if (currency && !opts.find((o) => o.value === currency)) {
          setCurrency("");
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "Failed to load Currencies");
        }
      } finally {
        setLoading((s) => ({ ...s, currency: false }));
      }
    })();

    return () => controller.abort();
  }, [service, integration, apiVersion, isPayOut]);

  /** STEP 4 → 5: Pay Modes */
  useEffect(() => {
    if (!service || !apiVersion || !currency) return;
    if (!isPayOut && !integration) return;

    const controller = new AbortController();

    (async () => {
      try {
        setLoading((s) => ({ ...s, payMode: true }));
        setError("");

        const url = buildUrl(
          isPayOut
            ? {
                service,
                api_version: apiVersion,
                currency,
              }
            : {
                service,
                integration_type: integration,
                api_version: apiVersion,
                currency,
              }
        );

        const json = await fetchJSON(url, { signal: controller.signal });
        const opts = parsePayModeOptions(json);

        setPayModeOptions(opts);
        if (payMode && !opts.find((o) => o.value === payMode)) {
          setPayMode("");
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "Failed to load Pay Modes");
        }
      } finally {
        setLoading((s) => ({ ...s, payMode: false }));
      }
    })();

    return () => controller.abort();
  }, [service, integration, apiVersion, currency, isPayOut]);

  /** STEP 5 → 6: Sub Pay Modes */
  useEffect(() => {
    if (!service || !apiVersion || !currency || !payMode) return;
    if (!isPayOut && !integration) return;

    const controller = new AbortController();

    (async () => {
      try {
        setLoading((s) => ({ ...s, subPayMode: true }));
        setError("");

        const url = buildUrl(
          isPayOut
            ? {
                service,
                api_version: apiVersion,
                currency,
                pay_mode: payMode,
              }
            : {
                service,
                integration_type: integration,
                api_version: apiVersion,
                currency,
                pay_mode: payMode,
              }
        );

        const json = await fetchJSON(url, { signal: controller.signal });
        const opts = parseSubPayModeOptions(json);

        setSubPayModeOptions(opts);
        if (subPayMode && !opts.find((o) => o.value === subPayMode)) {
          setSubPayMode("");
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "Failed to load Sub Pay Modes");
        }
      } finally {
        setLoading((s) => ({ ...s, subPayMode: false }));
      }
    })();

    return () => controller.abort();
  }, [service, integration, apiVersion, currency, payMode, isPayOut]);

  /** FINAL: fetch results when ALL filters are selected */
  useEffect(() => {
    const allSelected =
      service &&
      apiVersion &&
      currency &&
      payMode &&
      subPayMode &&
      (isPayOut || integration); // integration required only for PayIn

    if (!allSelected) return;

    const controller = new AbortController();

    (async () => {
      try {
        setLoading((s) => ({ ...s, results: true }));
        setError("");
        setFinalHtml("");
        setFinalCss("");
        setResults([]);

        const params = {
          service,
          api_version: apiVersion,
          currency,
          pay_mode: payMode,
          sub_pay_mode: subPayMode,
        };

        if (!isPayOut && integration) {
          params.integration_type = integration;
        }

        const url = buildUrl(params);
        const json = await fetchJSON(url, { signal: controller.signal });

        if (json && json.final && typeof json.description === "string") {
          setFinalHtml(json.description);
          if (typeof json.css === "string") {
            setFinalCss(json.css);
          }
          setResults([]);
        } else {
          setFinalHtml("");
          setFinalCss("");
          setResults(parseFinalResults(json));
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "Failed to load results");
          setResults([]);
          setFinalHtml("");
          setFinalCss("");
        }
      } finally {
        setLoading((s) => ({ ...s, results: false }));
      }
    })();

    return () => controller.abort();
  }, [service, integration, apiVersion, currency, payMode, subPayMode, isPayOut]);

  // API version disabled condition
  const apiDisabled = isPayOut
    ? !service || loading.api
    : !integration || loading.api;

  return (
    <>
      {/* Bootstrap 4 CSS + your API CSS */}
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-M9O3yq8pt5TR1+t0NenE2no0RvrRZtGJPD7WvyaManIeZDV4SSQSSHqzTeWY5Avb"
          crossOrigin="anonymous"
        />
        {finalCss && <style dangerouslySetInnerHTML={{ __html: finalCss }} />}
      </Head>

      {/* jQuery, Popper, Bootstrap JS */}
      <Script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        strategy="afterInteractive"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        strategy="afterInteractive"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossOrigin="anonymous"
      />
      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        strategy="afterInteractive"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossOrigin="anonymous"
      />

      <Header
        title={
          <>
            <span className={styles.titleAccent}>Simplify Complex </span>
            <br />
            <span className={styles.titlePrimary}> Transactions with a </span>
            <br />
            <span className={styles.titleAccent}> Single Secure Integration</span>
          </>
        }
        description="From getting paid to sending payouts, everything works through one simple integration. Fast, secure, and built to grow with you."
        minimal={false}
        showHero
        hideButton
        className={styles.headerContainer}
        titleClass={styles.customTitle}
        descriptionClass={styles.headerDescription}
      />

      <div className="container-xxl py-5">
        <div className="row g-4">
          {/* LEFT: Filters */}
          <aside className="col-12 col-lg-3">
            <div className="position-sticky" style={{ top: "96px" }}>
              <div className={styles.filterCard}>
                {/* 1) Service */}
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Service</label>
                  <select
                    className={styles.filterSelect}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Select service</option>
                    {serviceOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2) Integration Type – hidden for PayOut */}
                {!isPayOut && (
                  <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>
                      Integration Type
                    </label>
                    <select
                      className={styles.filterSelect}
                      value={integration}
                      onChange={(e) => setIntegration(e.target.value)}
                      disabled={!service || loading.integration}
                    >
                      <option value="">
                        {loading.integration ? "Loading…" : "Select integration"}
                      </option>
                      {integrationOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* 3) API Version */}
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>API Version</label>
                  <select
                    className={styles.filterSelect}
                    value={apiVersion}
                    onChange={(e) => setApiVersion(e.target.value)}
                    disabled={apiDisabled}
                  >
                    <option value="">
                      {loading.api ? "Loading…" : "Select version"}
                    </option>
                    {apiOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4) Currency */}
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Currency</label>
                  <select
                    className={styles.filterSelect}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    disabled={!apiVersion || loading.currency}
                  >
                    <option value="">
                      {loading.currency ? "Loading…" : "Select currency"}
                    </option>
                    {currencyOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5) Pay Mode */}
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Pay Mode</label>
                  <select
                    className={styles.filterSelect}
                    value={payMode}
                    onChange={(e) => setPayMode(e.target.value)}
                    disabled={!currency || loading.payMode}
                  >
                    <option value="">
                      {loading.payMode ? "Loading…" : "Select pay mode"}
                    </option>
                    {payModeOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6) Sub Pay Mode */}
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Sub Pay Mode</label>
                  <select
                    className={styles.filterSelect}
                    value={subPayMode}
                    onChange={(e) => setSubPayMode(e.target.value)}
                    disabled={!payMode || loading.subPayMode}
                  >
                    <option value="">
                      {loading.subPayMode ? "Loading…" : "Select sub pay mode"}
                    </option>
                    {subPayModeOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: Content + Results */}
          <main className="col-12 col-lg-9">
            <section
              id="overview"
              ref={overviewRef}
              className="mb-4"
              style={{ scrollMarginTop: "96px" }}
            >
              <h2 className="h2 fw-bold mb-2">Overview</h2>
              <p className="text-secondary">
                This guide shows a cascading filter UI that calls your backend
                after each step, appends the chosen value to the URL, and
                finally renders results when all filters are chosen.
              </p>
            </section>

            {/* Results */}
            <section className="mb-4">
              <div className={styles.resultsHeader}>
                <h3 className="h4 m-0">Results</h3>
                <code className={styles.queryBadge}>
                  {decodeURIComponent(
                    buildUrl({
                      service,
                      integration_type: isPayOut ? "" : integration,
                      api_version: apiVersion,
                      currency,
                      pay_mode: payMode,
                      sub_pay_mode: subPayMode,
                    })
                  )}
                </code>
              </div>

              {error && (
                <div className={styles.errorBox}>
                  <b>Error:</b> {error}
                </div>
              )}

              {loading.results && !error && (
                <div className={styles.stateBox}>Loading results…</div>
              )}

              {/* Render final HTML if present */}
              {!loading.results && !error && finalHtml && (
                <div
                  className={styles.finalMarkupWrapper}
                  dangerouslySetInnerHTML={{ __html: finalHtml }}
                />
              )}

              {/* No results / helper state */}
              {!loading.results &&
                !error &&
                !finalHtml &&
                results.length === 0 && (
                  <div className={styles.stateBox}>
                    {service &&
                    (isPayOut || integration) &&
                    apiVersion &&
                    currency &&
                    payMode &&
                    subPayMode
                      ? "No results."
                      : "Pick values step-by-step to see results."}
                  </div>
                )}

              {/* List-based results */}
              {!loading.results && !error && !finalHtml && results.length > 0 && (
                <ul className={styles.resultList}>
                  {results.map((r, i) => (
                    <li key={r.id ?? i} className={styles.resultCard}>
                      <div className={styles.resultTitle}>
                        {r.title ?? r.name ?? `Item #${i + 1}`}
                      </div>
                      {r.description && (
                        <p className={styles.resultDesc}>{r.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section
              id="prereq"
              ref={prereqRef}
              className="mb-4"
              style={{ scrollMarginTop: "96px" }}
            >
              <h2 className="h2 fw-bold mb-2">Pre Requisites</h2>
              <ul className="ps-3">
                <li>
                  Backend should return option lists for the next step when
                  called with partial params.
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
      <ChatAssistant/>
      <Footer/>
    </>
    
  );
}
