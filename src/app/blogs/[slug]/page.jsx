// app/blogs/[slug]/page.jsx
import BlogDetailClient from "./BlogDetailClient";

// (optional) if you have a list endpoint you can merge results with these
const LIST_API = "http://192.168.1.34:9000/api/blogs";

// 🔴 Every slug you link to (and want exported) must be here if the API isn't reachable
const FALLBACK_SLUGS = [
  "top-software-development-company-in-india",
  "how-is-mobile-app-different-from-a-web-application-ooooooooooooooo",
];

async function fetchAllSlugs() {
  try {
    const res = await fetch(LIST_API, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    const blogs = Array.isArray(json) ? json : Array.isArray(json?.data) ? json.data : [];
    return blogs.filter(b => b?.slug).map(b => b.slug);
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const slugsFromApi = await fetchAllSlugs();
  const slugs = Array.from(
    new Set([...(slugsFromApi || []), ...FALLBACK_SLUGS])
  ).filter(Boolean);

  if (slugs.length === 0) return [{ slug: "placeholder" }];
  return slugs.map(slug => ({ slug }));
}

// With output: "export", only the above paths are valid
export const dynamicParams = false;

export default function Page({ params }) {
  return <BlogDetailClient slug={params.slug} />;
}
