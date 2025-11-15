// app/api/dev-filter/route.js
import { NextResponse } from "next/server";

const BASE = process.env.DEV_FILTER_ORIGIN ?? "http://192.168.1.33:5000";

export async function GET(req) {
  const url = new URL(req.url);
  const backendUrl = `${BASE}/development/filter${url.search}`; // no extra slash

  const res = await fetch(backendUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      // If needed:
      // Authorization: req.headers.get("authorization") || "",
      // Cookie: req.headers.get("cookie") || "",
    },
    // cache: "no-store", // handy during dev
  });

  const body = await res.arrayBuffer();
  return new NextResponse(body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") || "application/json",
    },
  });
}
