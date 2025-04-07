import type { INotification } from "../../interfaces/notification.js";
import type { resultMessage } from "../../types/notificationType.js";
import twilio from "twilio";

export class SMSNotification implements INotification {
  async sendMessage(message: string): Promise<resultMessage> {
    const { ACCOUNT_SID, AUTH_TOKEN, FROM, TO } = process.env;
    try {
        const client = twilio(ACCOUNT_SID!, AUTH_TOKEN!);
        
        const info = await client?.messages?.create({
            body: message,
            from: FROM,
            to: TO!
        });


        if (info?.errorMessage) {
            return {
                data: {
                    notification: null
                },
                error: info?.errorMessage
            }
        }

        return {
            data: {
                notification: 'OK'
            },
            error: null
        }

    } catch (error) {
        console.log(error)
        return {
          data: {
              notification: null
          },
          error: "Error to send notification"
      }
    }
  }
}