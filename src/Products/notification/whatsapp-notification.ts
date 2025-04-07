import twilio from "twilio";
import type { INotification } from "../../interfaces/notification.js";
import type { resultMessage } from "../../types/notificationType.js";

export class WhatsAppNotification implements INotification {
  async sendMessage(message: string): Promise<resultMessage> {
    const { ACCOUNT_SID, AUTH_TOKEN, FROM_WHATSAPP, TO_WHATSAPP, CONTENT_SID } = process.env;
    try {
        const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

        const message = await client?.messages?.create({
            from: FROM_WHATSAPP,
            contentSid: CONTENT_SID,
            contentVariables: '{"1":"409173"}',
            to: TO_WHATSAPP!,
        });
    


        if (message?.errorMessage) {
            return {
                data: {
                    notification: null
                },
                error: message?.errorMessage
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
          error: "Eta vaina no sirve"
      }
    }
  }
}