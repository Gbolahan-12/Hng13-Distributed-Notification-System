import nodemailer from "nodemailer";
import { renderTemplate } from "./template-renderer";

export class EmailService {
  async send({ to, templateId, templateVars }: any) {
    const html = await renderTemplate(templateId, templateVars);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: '"Notify System" <noreply@notify.com>',
      to,
      subject: "New Notification",
      html,
    });

    console.log(`✅ Email sent to ${to}`);
  }
}