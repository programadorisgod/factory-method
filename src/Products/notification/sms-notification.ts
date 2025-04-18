import type { INotification } from "../../interfaces/notification.js";
import type { resultMessage } from "../../types/notificationType.js";
import twilio from "twilio";

export class SMSNotification implements INotification {

  constructor(
    private phoneNumber: string,
    private message: string,
    private senderId?: string,
    private deliveryReportRequired: boolean = false,
    private scheduleTime?: Date
  ) {}

  async sendMessage(): Promise<resultMessage> {
    const { ACCOUNT_SID, AUTH_TOKEN, FROM, TO } = process.env;
    try {
        const client = twilio(ACCOUNT_SID!, AUTH_TOKEN!);
        
        const info = await client?.messages?.create({
            body: `PhoneNumber: ${this.phoneNumber??""}, Message: ${this.message??""}, SenderID: ${this.senderId??""}, DRR: ${this.deliveryReportRequired??""}, ScheduleTime: ${this.scheduleTime??""}`,
            from: FROM,
            to: TO!,
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