import { EmailTemplate } from "@/definitions/contact";
import config from "@/lib/admin/config";
import { Resend } from "resend";

// Tipos para los emails
interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

class EmailService {
  private resend: Resend;
  private from: string;

  constructor() {
    if (!config?.env?.resendToken) {
      throw new Error("RESEND_API_KEY is not defined");
    }

    this.resend = new Resend(config?.env?.resendToken);
    this.from = config?.env?.emailFrom || "onboarding@resend.dev";
  }

  async sendEmail(options: EmailOptions) {
    try {
      const data = await this.resend.emails.send({
        from: options.from || this.from,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text,
      });

      return { success: true, data };
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, error };
    }
  }

  // Método específico para formulario de contacto
  async sendContactEmail(template: EmailTemplate) {
    const subject = `Nuevo mensaje de ${template.name}`;
    const html = `
      <div>
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${template.name}</p>
        <p><strong>Email:</strong> ${template.email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${template.message}</p>
      </div>
    `;

    return this.sendEmail({
      to: config?.env?.emailAdmin,
      subject,
      html,
    });
  }
}

// Singleton pattern para evitar múltiples instancias
export const emailService = new EmailService();
