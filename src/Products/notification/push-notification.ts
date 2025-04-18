import type { INotification } from "../../interfaces/notification.js";
import type { resultMessage } from "../../types/notificationType.js";

export class PushNotification implements INotification{

  constructor(
    private deviceToken: string,
    private title: string,
    private message: string, 
    private imageUrl: string,
    private clickAccion: string,
    private priority: 'high' | 'normal'
  ) {}

  async sendMessage(): Promise<resultMessage> {
    return {
      data: {
        notification: JSON.stringify({
          deviceToken: this.deviceToken,
          title: this.title,
          message: this.message,
          imageUrl: this.imageUrl,
          clickAccion: this.clickAccion,
          priority: this.priority
        })
      },
      error: null
    };
  }

}