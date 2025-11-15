"use client";

import { useEffect, useState } from "react";
import styles from "../_styles/blogCommon.module.css";
import Header from "@/components/Home/Header/Header";
import Footer from "@/components/Home/footer/Footer";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";

const DETAIL_API = "/api/blog-details";
const ASSET_BASE = "http://192.168.1.35:9000/images/blog";

function buildImage(blog) {
  const file = blog?.blog_image || blog?.image || blog?.thumbnail;
  if (!file) return "/images/placeholder.png";
  if (typeof file === "string" && /^https?:\/\//i.test(file)) return file;
  return `${ASSET_BASE.replace(/\/$/, "")}/${String(file).replace(/^\//, "")}`;
}

// ---- NEW: server-side decrypt helper (calls your /api/decrypt-raw route) ----
async function decryptOnServer(payload) {
  try {
    const res = await fetch("/api/decrypt-raw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload: String(payload).trim() }),
      cache: "no-store",
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      console.error("decrypt-raw failed", res.status, txt);
      return null;
    }
    const { text } = await res.json();
    return text ?? null;
  } catch (e) {
    console.error("decryptOnServer error", e);
    return null;
  }
}

// quick check for Laravel Crypt payload (base64 of {"iv":...,"value":...})
// const looksEncrypted = (s) => typeof s === "string" && s.startsWith("eyJpdiI6");

const looksEncrypted = (s) => {
  if (typeof s !== "string") return false;
  const t = s.trim();
  // Laravel Crypt payloads are base64 of {"iv":"...","value":"...","mac":"..."}
  return t.startsWith("eyJpdiI6") && t.endsWith("}");
};

export default function BlogDetailClient({ slug }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Static-export placeholder page
  if (slug === "placeholder") {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <h1 className={styles.blogTitle}>
            No blogs were available at build time
          </h1>
          <p>
            The app was exported statically, but the blog API was offline, so we
            generated a placeholder page. Try again when the API is running.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setBlog(null);

      try {
        console.log("[BLOG] fetching", DETAIL_API, "slug:", slug);

        const res = await fetch(DETAIL_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // credentials: "include", // uncomment if Laravel needs session/CSRF
          body: JSON.stringify({ slug }),
          cache: "no-store",
        });

        const raw = await res.clone().text();
        console.log("[BLOG] status", res.status);
        console.log("[BLOG] raw response:", raw);

        if (!res.ok) {
          if (!cancelled) setBlog(null);
          return;
        }

        const json = JSON.parse(raw);
        // shape can be {data:{blogs:{...}}} or {blogs:{...}}
        const blogData = json?.data?.blogs ?? json?.blogs ?? json;
        console.log("[BLOG] blogData picked:", blogData);

        // ---- NEW: decrypt encrypted fields on the server ----
        const decryptTasks = [];
        const fieldsToCheck = [
          "title",
          "shortdes",
          "short_description",
          "summary",
          "description",
          "content",
          "body",
          "meta_description",
        ];

        for (const key of fieldsToCheck) {
          const val = blogData?.[key];
          if (looksEncrypted(val)) {
            decryptTasks.push(
              decryptOnServer(val).then((plain) => ({ key, plain }))
            );
          }
        }

        if (decryptTasks.length) {
          const results = await Promise.all(decryptTasks);
          for (const r of results) {
            if (r && r.plain) {
              blogData[r.key] = r.plain;
            }
          }
        }
        // -----------------------------------------------

        if (!cancelled) setBlog(blogData || null);
      } catch (err) {
        console.error("[BLOG] fetch failed", err);
        if (!cancelled) setBlog(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <p>Loading blog…</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <h1 className={styles.blogTitle}>Blog not found</h1>
          <p>Slug: {slug}</p>
          <p style={{ opacity: 0.7 }}>
            Check DevTools → Network → <code>POST /api/blog-details</code> for
            status/response.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const img = buildImage(blog);
  const date =
    blog.formatted_date ||
    (blog.created_at ? new Date(blog.created_at).toLocaleDateString() : "");

  const shortText =
    blog.shortdes || blog.short_description || blog.summary || "";

  const html = blog.description || blog.content || blog.body || "";

  return (
    <>
      <Header />

      <main>
        <header className={styles.Header}>
          <h1 className={styles.Title}>
            <span className={styles.primary}>{blog.title}</span>
          </h1>
        </header>

        <section className={styles.container}>
          <div className={styles.grid}>
            <aside className={styles.toc}>
              <div className={styles.tocCard}>
                <h2 className={styles.tocTitle}>On this page</h2>
                <ul className={styles.tocList}>
                  <li>
                    <a href="#intro">Introduction</a>
                  </li>
                  <li>
                    <a href="#content">Main content</a>
                  </li>
                </ul>
              </div>
            </aside>

            <article className={styles.centerCol}>
              <div className={styles.metaBar}>
                <div className={styles.metaRow}>
                  {date ? (
                    <span className={styles.metaItem}>{date}</span>
                  ) : null}
                  {blog.name ? (
                    <span className={styles.metaItem}>By {blog.name}</span>
                  ) : null}
                </div>
              </div>

              <figure className={styles.heroMedia}>
                <img
                  src={img}
                  alt={blog.title || "Blog cover"}
                  className={styles.heroImg}
                />
              </figure>

              <div id="intro" className={styles.blogP}>
                {shortText || "No short description."}
              </div>

              <hr className={styles.blogDivider} />

              <div id="content">
                {html ? (
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                ) : (
                  <>
                    <h2 className="blogH2">About this article</h2>
                    <p className={styles.blogP}>
                      Content for this blog isn&apos;t provided in the API yet,
                      so we&apos;re showing the summary instead.
                    </p>
                  </>
                )}
              </div>
            </article>

            <aside className={styles.sidebar}>{/* related later */}</aside>
          </div>

          {process.env.NODE_ENV === "development" && blog && (
            <pre
              style={{
                background: "#111",
                color: "#0f0",
                padding: 12,
                overflow: "auto",
                marginTop: 24,
              }}
            >
              {JSON.stringify(blog, null, 2)}
            </pre>
          )}
        </section>
      </main>

      <ChatAssistant />
      <Footer />
    </>
  );
}
