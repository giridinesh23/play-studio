import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  eventDate?: string;
  venue?: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function adminEmailHtml(data: ContactPayload): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;background:#1a1a2e;color:#a0a0b8;font-size:13px;width:140px;vertical-align:top;border-bottom:1px solid #2a2a40;">${label}</td>
          <td style="padding:10px 16px;background:#12122a;color:#e8e8f0;font-size:13px;border-bottom:1px solid #2a2a40;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a1a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a1a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1a1a3e,#0d0d2b);border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;border-bottom:2px solid #d4af37;">
          <p style="margin:0 0 4px;color:#d4af37;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Play Studio Bhutan</p>
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">New Enquiry Received</h1>
          <p style="margin:8px 0 0;color:#a0a0b8;font-size:13px;">${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        </td></tr>

        <!-- Alert badge -->
        <tr><td style="background:#12122a;padding:16px 40px;">
          <div style="background:rgba(212,175,55,0.12);border:1px solid rgba(212,175,55,0.3);border-radius:8px;padding:12px 16px;display:inline-block;">
            <span style="color:#d4af37;font-size:13px;font-weight:600;">⚡ Action Required — Respond within 24 hours</span>
          </div>
        </td></tr>

        <!-- Details table -->
        <tr><td style="background:#12122a;padding:0 40px 8px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #2a2a40;">
            ${row("Full Name", data.name)}
            ${row("Email", data.email)}
            ${row("Phone", data.phone || "")}
            ${row("Service", data.service || "")}
            ${row("Event Date", data.eventDate ? new Date(data.eventDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "")}
            ${row("Venue / Size", data.venue || "")}
          </table>
        </td></tr>

        <!-- Message -->
        <tr><td style="background:#12122a;padding:16px 40px 32px;">
          <p style="margin:0 0 10px;color:#a0a0b8;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Message</p>
          <div style="background:#1a1a2e;border-left:3px solid #d4af37;border-radius:0 8px 8px 0;padding:16px 20px;">
            <p style="margin:0;color:#e8e8f0;font-size:14px;line-height:1.7;">${data.message.replace(/\n/g, "<br>")}</p>
          </div>
        </td></tr>

        <!-- Reply CTA -->
        <tr><td style="background:#1a1a2e;padding:24px 40px;text-align:center;border-top:1px solid #2a2a40;">
          <a href="mailto:${data.email}?subject=Re: Your Enquiry at Play Studio" style="display:inline-block;background:#d4af37;color:#0a0a1a;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:6px;letter-spacing:1px;text-transform:uppercase;">Reply to ${data.name}</a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#0d0d1f;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;border-top:1px solid #2a2a40;">
          <p style="margin:0;color:#4a4a6a;font-size:12px;">Play Studio · Changzamtog, Thimphu, Bhutan</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function clientEmailHtml(data: ContactPayload): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a1a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a1a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1a1a3e,#0d0d2b);border-radius:12px 12px 0 0;padding:40px 40px 32px;text-align:center;border-bottom:2px solid #d4af37;">
          <p style="margin:0 0 4px;color:#d4af37;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Play Studio Bhutan</p>
          <h1 style="margin:8px 0 4px;color:#ffffff;font-size:26px;font-weight:700;">We've Received Your Enquiry</h1>
          <p style="margin:0;color:#a0a0b8;font-size:14px;">Thank you, ${data.name}. We'll be in touch shortly.</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#12122a;padding:36px 40px;">
          <p style="margin:0 0 20px;color:#c8c8e0;font-size:15px;line-height:1.7;">
            Hi <strong style="color:#ffffff;">${data.name}</strong>,
          </p>
          <p style="margin:0 0 20px;color:#c8c8e0;font-size:14px;line-height:1.8;">
            Thank you for reaching out to Play Studio. We've received your message and our team will review it and get back to you within <strong style="color:#d4af37;">24 hours</strong>.
          </p>

          <!-- Submission summary -->
          <div style="background:#1a1a2e;border:1px solid #2a2a40;border-radius:10px;padding:20px 24px;margin:24px 0;">
            <p style="margin:0 0 16px;color:#d4af37;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Your Submission Summary</p>
            ${data.service ? `<p style="margin:0 0 8px;font-size:13px;color:#a0a0b8;">Service: <span style="color:#e8e8f0;">${data.service}</span></p>` : ""}
            ${data.eventDate ? `<p style="margin:0 0 8px;font-size:13px;color:#a0a0b8;">Event Date: <span style="color:#e8e8f0;">${new Date(data.eventDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span></p>` : ""}
            ${data.venue ? `<p style="margin:0 0 8px;font-size:13px;color:#a0a0b8;">Venue / Size: <span style="color:#e8e8f0;">${data.venue}</span></p>` : ""}
            <p style="margin:16px 0 0;font-size:13px;color:#a0a0b8;">Your message:</p>
            <p style="margin:8px 0 0;font-size:13px;color:#c8c8e0;line-height:1.7;border-left:2px solid #d4af37;padding-left:12px;">${data.message.replace(/\n/g, "<br>")}</p>
          </div>

          <p style="margin:0 0 8px;color:#c8c8e0;font-size:14px;line-height:1.8;">In the meantime, feel free to reach us directly:</p>
          <p style="margin:0;color:#c8c8e0;font-size:14px;">
            📧 <a href="mailto:playstudiobhutan@gmail.com" style="color:#d4af37;text-decoration:none;">playstudiobhutan@gmail.com</a>
          </p>
        </td></tr>

        <!-- Divider with tagline -->
        <tr><td style="background:#1a1a2e;padding:20px 40px;text-align:center;border-top:1px solid #2a2a40;border-bottom:1px solid #2a2a40;">
          <p style="margin:0;color:#d4af37;font-size:13px;font-style:italic;">"Where Every Event Meets Perfection"</p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#0d0d1f;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;">
          <p style="margin:0 0 6px;color:#6a6a8a;font-size:12px;">Play Studio · Changzamtog, Thimphu, Bhutan</p>
          <p style="margin:0;color:#4a4a6a;font-size:11px;">Mon–Sun, 9:00 AM–6:00 PM · By appointment only</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.CONTACT_EMAIL!;
    const subject = data.service
      ? `New Enquiry: ${data.service} — ${name}`
      : `New Enquiry from ${name}`;

    await transporter.sendMail({
      from: `"Play Studio Website" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject,
      html: adminEmailHtml(data),
    });

    await transporter.sendMail({
      from: `"Play Studio Bhutan" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your enquiry — Play Studio Bhutan",
      html: clientEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
