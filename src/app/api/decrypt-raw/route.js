// app/api/decrypt-raw/route.js
import crypto from "crypto";

function getKey() {
  const raw = process.env.LARAVEL_APP_KEY || "";
  if (!raw) throw new Error("Missing LARAVEL_APP_KEY");
  const b64 = raw.startsWith("base64:") ? raw.slice(7) : raw;
  const key = Buffer.from(b64, "base64");
  if (key.length !== 32) {
    throw new Error("LARAVEL_APP_KEY must decode to 32 bytes (AES-256)");
  }
  return key;
}

function timingSafeEqHex(aHex, bHex) {
  const a = Buffer.from(aHex, "hex");
  const b = Buffer.from(bHex, "hex");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function decryptLaravel(payloadB64) {
  const json = Buffer.from(payloadB64, "base64").toString("utf8");
  const blob = JSON.parse(json);

  const ivB64 = blob.iv;
  const valB64 = blob.value;
  const macHex = blob.mac || "";

  if (!ivB64 || !valB64) throw new Error("Invalid payload");

  const key = getKey();

  // Verify MAC like Laravel: HMAC-SHA256 over (iv + value)
  if (macHex) {
    const calcMac = crypto
      .createHmac("sha256", key)
      .update(ivB64 + valB64, "utf8")
      .digest("hex");
    if (!timingSafeEqHex(calcMac, macHex)) {
      throw new Error("MAC verification failed");
    }
  }

  const iv = Buffer.from(ivB64, "base64");
  const cipherText = Buffer.from(valB64, "base64");

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const plain = Buffer.concat([decipher.update(cipherText), decipher.final()]);
  return plain.toString("utf8");
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const payload = body?.payload || "";
    if (!payload) {
      return new Response(JSON.stringify({ error: "Missing payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }






    const text = decryptLaravel(payload);
    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });


    
  } catch (err) {
    console.error("[decrypt-raw] error:", err?.message || err);
    return new Response(JSON.stringify({ error: err?.message || "Decrypt error" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Node runtime required for crypto
export const runtime = "nodejs";


