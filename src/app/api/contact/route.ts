import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(",") || [];
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message, sourcePage } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires" },
        { status: 400 }
      );
    }

    // Email to client (confirmation)
    await resend.emails.send({
      from: `ZAIM DIGITAL <${FROM_EMAIL}>`,
      to: [email],
      subject: "Confirmation de réception - ZAIM DIGITAL",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
            h1 { margin: 0; font-size: 24px; }
            .highlight { color: #2563eb; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ZAIM DIGITAL</h1>
              <p>Votre partenaire digital</p>
            </div>
            <div class="content">
              <h2>Bonjour ${name},</h2>
              <p>Nous avons bien reçu votre demande et nous vous remercions de votre intérêt pour <span class="highlight">ZAIM DIGITAL</span>.</p>
              <p>Notre équipe examine actuellement votre message et vous contactera dans les <strong>plus brefs délais</strong>.</p>
              <p>En attendant, n'hésitez pas à consulter nos solutions sur notre site web.</p>
              <br>
              <p>Cordialement,</p>
              <p><strong>L'équipe ZAIM DIGITAL</strong></p>
            </div>
            <div class="footer">
              <p>ZAIM DIGITAL - Innovation. Performance. Simplicité.</p>
              <p>Casablanca, Maroc | contact@zaimdigital.ma</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Email to admin (notification)
    await resend.emails.send({
      from: `ZAIM DIGITAL - Contact <${FROM_EMAIL}>`,
      to: ADMIN_EMAILS,
      subject: `Nouvelle demande de contact - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #2563eb; }
            .field-label { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
            .field-value { color: #1e293b; font-size: 16px; }
            .source-page { background: #fef3c7; border-left-color: #f59e0b; }
            h1 { margin: 0; font-size: 20px; }
            .urgent { background: #fee2e2; color: #dc2626; padding: 10px; border-radius: 5px; text-align: center; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nouvelle demande de contact</h1>
            </div>
            <div class="content">
              <div class="urgent">
                Nouvelle demande reçue - À traiter rapidement
              </div>

              <div class="field source-page">
                <div class="field-label">Page source</div>
                <div class="field-value">${sourcePage || "Page d'accueil"}</div>
              </div>

              <div class="field">
                <div class="field-label">Nom complet</div>
                <div class="field-value">${name}</div>
              </div>

              ${company ? `
              <div class="field">
                <div class="field-label">Entreprise</div>
                <div class="field-value">${company}</div>
              </div>
              ` : ""}

              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="field-label">Téléphone</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ""}

              <div class="field">
                <div class="field-label">Message</div>
                <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Votre message a été envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
