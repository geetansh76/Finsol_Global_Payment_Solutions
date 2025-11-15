// app/api/blog-details/route.js
export const runtime = "nodejs";

export async function POST(req) {
  const { slug } = await req.json();

  const upstream = await fetch("http://192.168.1.35:9000/api/blog-details", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug }),
    // credentials: "include", // uncomment if your Laravel needs session/CSRF
  });

  const text = await upstream.text();
  return new Response(text, {
    status: upstream.status,
    headers: { "Content-Type": upstream.headers.get("Content-Type") || "application/json" },
  });
}
