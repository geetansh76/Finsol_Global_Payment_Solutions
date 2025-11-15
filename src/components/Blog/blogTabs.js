"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./blogTabs.module.css";
import Image from "next/image";

const API_URL = "http://192.168.1.35:9000/api/blogs";
const ASSET_BASE = "http://192.168.1.35:9000/images/blog";



export default function BlogTabs({ initialYear = "" }) {
  const [active, setActive] = useState("all");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL, { signal: ac.signal, cache: "no-store" });
        console.log("Data is", res);
        
        if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        const payload = await res.json();
        const rows = Array.isArray(payload?.data) ? payload.data : [];
        console.log("row is", rows);
        const mapped = rows.map((x) => {
          const imageFile = x.blog_image || x.image || "";
          const img =
            imageFile?.startsWith("http") || !ASSET_BASE
              ? imageFile || "/images/placeholder.png"
              : `${ASSET_BASE.replace(/\/$/, "")}/${imageFile}`;
          const cat =
            x?.categories?.[0]?.categories_att?.slug ||
            (x?.categories?.[0]?.categories_att?.title || "")
              .toLowerCase()
              .replace(/\s+/g, "-") ||
            "uncategorized";
          const year = x.created_at
            ? new Date(x.created_at).getFullYear()
            : new Date().getFullYear();
          return {
            id: x.id,
            slug: x.slug || String(x.id),
            title: x.title,
            image: img || "/images/placeholder.png",
            category: cat,
            year,
            shortdes: typeof x.shortdes === "string" ? x.shortdes : "",
          };
        });
        setArticles(mapped);
      } catch (err) {
        if (err?.name !== "AbortError") console.error("[blogs] fetch error:", err);
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, []);

  const dynamicTabKeys = useMemo(() => {
    const set = new Set();
    articles.forEach((a) => a.category && set.add(a.category));
    return Array.from(set).sort();
  }, [articles]);

  const TABS = useMemo(
    () =>
      [{ key: "all", label: "All Articles" }].concat(
        dynamicTabKeys.map((k) => ({ key: k, label: toTitle(k) }))
      ),
    [dynamicTabKeys]
  );

  const YEARS = useMemo(() => {
    const set = new Set();
    articles.forEach((a) => Number.isFinite(a.year) && set.add(a.year));
    const arr = Array.from(set).sort((a, b) => b - a);
    return arr.length ? arr : [2025, 2024, 2023, 2022, 2021];
  }, [articles]);

  const selectedYear = useMemo(() => {
    const n = parseInt(initialYear, 10);
    if (Number.isFinite(n) && YEARS.includes(n)) return String(n);
    return YEARS.length ? String(YEARS[0]) : "";
  }, [initialYear, YEARS]);

  const onArchiveChange = (e) => {
    const year = e.target.value;
    if (year) router.push(`/blogs?year=${year}`);
  };

  const filtered = useMemo(() => {
    if (active === "all") return articles;
    return articles.filter((a) => a.category === active);
  }, [active, articles]);

  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        {/* LEFT: vertical tabs */}
        <nav className={styles.sidebar} aria-label="Blog categories">
          <div className={styles.tabCol}>
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                aria-selected={active === t.key}
                className={`${styles.tab} ${active === t.key ? styles.active : ""}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Archive card */}
          <div className={styles.archiveCard} aria-labelledby="archive-title">
            <h3 id="archive-title" className={styles.archiveTitle}>
              Blog Archive
            </h3>
            <div className={styles.archiveControl}>
              <select
                className={styles.archiveSelect}
                value={selectedYear}
                onChange={onArchiveChange}
                aria-label="Choose a year to view archived posts"
              >
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <span className={styles.selectChevron} aria-hidden="true">
                ▾
              </span>
            </div>
            <p className={styles.archiveHint}>
              Browse posts by year. Your grid stays put.
            </p>
          </div>
        </nav>

        {/* RIGHT: cards */}
        <div className={styles.content}>
          {loading && <p className={styles.loading}>Loading articles…</p>}
          {!loading && filtered.length === 0 && (
            <p className={styles.empty}>No articles in this category yet.</p>
          )}
          <div className={styles.grid}>
            {filtered.map((a) => (
              <Link key={a.id} href={`/blogs/${a.slug}`} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={safeImage(a.image)}
                    alt={a.title}
                    width={640}
                    height={360}
                    className={styles.cardImage}
                  />
                </div>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardExcerpt}>{a.shortdes || "Read more →"}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* helpers */
function toTitle(slug) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

function safeImage(src) {
  return src && typeof src === "string" ? src : "/images/placeholder.png";
}
