import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { to, subject, text, html, replyTo } = await req.json();

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // optional but useful to surface SMTP problems
    await transporter.verify();

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
      html,
      // only set replyTo if it was provided
      ...(replyTo ? { replyTo } : {}),
    });

    console.log("SMTP response:", info);

    return NextResponse.json(
      {
        message: "Email sent",
        id: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("send-email error:", err);
    return NextResponse.json(
      { message: "Error sending email", error: err.message },
      { status: 500 }
    );
  }
}
