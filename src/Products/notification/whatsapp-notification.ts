import twilio from "twilio";
import type { INotification } from "../../interfaces/notification.js";
import type { resultMessage } from "../../types/notificationType.js";

export class WhatsAppNotification implements INotification {

  constructor(
    private phoneNumber: string,
    private message: string,
    private mediaUrl: string,
    private caption: string,
    private interactiveButtons: [],
    private language: string
  ) {}

  async sendMessage(): Promise<resultMessage> {
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
        console.log(`Phone Number: ${this.phoneNumber}, Message: ${this.message}, MediaURL: ${this.mediaUrl}, Caption: ${this.caption}, InteractiveButtons: ${this.interactiveButtons}, Language: ${this.language}`)
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