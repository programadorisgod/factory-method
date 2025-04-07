import type { INotification } from "../../interfaces/notification.js";
import type { resultMessage } from "../../types/notificationType.js";
import { transporter } from "../../utils/mail/transporter.js";

export class EmailNotification implements INotification{
  async sendMessage(message: string): Promise<resultMessage> {
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: "destinatario@example.com",
      subject: message,
      text: "Tu pago ha sido realizado con exito",
    };
  
    try {
      await transporter.sendMail(mailOptions)
      return {
        data: {
            notification: "Sent Done"
        },
        error: null
    }
    } catch (error) {
      console.error(error);
      return {
        data: {
            notification: null
        },
        error: "Have a problem whit wasa"
    }
    }
  }
}