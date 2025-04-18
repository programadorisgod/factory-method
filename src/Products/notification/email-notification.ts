import type { INotification } from "../../interfaces/notification.js";
import type { resultMessage } from "../../types/notificationType.js";
import { transporter } from "../../utils/mail/transporter.js";
import nodemailer from "nodemailer";

export class EmailNotification implements INotification{
  constructor(
    private to: string,
    private subject: string,
    private body: string,
    private cc: string[] = [],
    private bcc: string[] = [],
    private attachments: string[] = [],
    private priority: 'high' | 'normal' | 'low' = 'normal'
  ) {}

  async sendMessage(): Promise<resultMessage> {
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.USER_EMAIL,
      to: this.to?? "",
      subject: this.subject?? "",
      text: this.body?? "", 
      cc: this.cc?? "",
      bcc: this.bcc?? "",
      priority: this.priority?? "",
      attachments: this.attachments.map((filePath) => ({
        path: filePath,
      }))?? "",
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
        error: "Have a problem whit email"
    }
    }
  }
}