export const runtime = "nodejs";

import nodemailer from "nodemailer";


type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  source?: string; // contact / tour / vs.
  tourTitle?: string;
  tourId?: string;
};

// Basit HTML escape (XSS vs. riskini azaltmak için)
function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    // ✅ Validasyon (en az bunlar olsun)
    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Lütfen ad, e-posta ve mesaj alanlarını doldurun." },
        { status: 400 }
      );
    }

    // ✅ ENV kontrol
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const to = process.env.MAIL_TO;
    const from = process.env.MAIL_FROM;

    if (!host || !user || !pass || !to || !from) {
      return Response.json(
        { ok: false, error: "Sunucu mail ayarları eksik (ENV)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeSubject = escapeHtml(subject || "-");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const src = body.source ? `Kaynak: ${escapeHtml(body.source)}` : "Kaynak: -";
    const tourInfo =
      body.tourTitle || body.tourId
        ? `Tur: ${escapeHtml(body.tourTitle ?? "-")} (ID: ${escapeHtml(body.tourId ?? "-")})`
        : "";

    // ✅ Sana giden mail
    await transporter.sendMail({
      from: `Yildiz Hotel Website <${from}>`,
      to,
      replyTo: email, // Sen "Yanıtla" deyince kullanıcıya gitsin
      subject:
        (body.source === "tour" ? "Tur Bilgi Formu" : "İletişim Formu") +
        (subject ? ` — ${subject}` : ""),
      text: `
Yeni Form Mesajı
${src}
${tourInfo}

Ad: ${name}
E-posta: ${email}
Telefon: ${phone || "-"}

Konu: ${subject || "-"}
Mesaj:
${message}
      `.trim(),
      html: `
        <h2>Yeni Form Mesajı</h2>
        <p><b>${src}</b></p>
        ${tourInfo ? `<p><b>${tourInfo}</b></p>` : ""}
        <hr/>
        <p><b>Ad:</b> ${safeName}</p>
        <p><b>E-posta:</b> ${safeEmail}</p>
        <p><b>Telefon:</b> ${safePhone}</p>
        <p><b>Konu:</b> ${safeSubject}</p>
        <p><b>Mesaj:</b><br/>${safeMessage}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("MAIL_ERROR:", err);
    return Response.json(
      { ok: false, error: "Mail gönderilemedi. SMTP ayarlarını kontrol edin." },
      { status: 500 }
    );
  }
}
