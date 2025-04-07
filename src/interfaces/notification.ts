import type { resultMessage } from "../types/notificationType.js"
export interface INotification{
  sendMessage(message: string): Promise<resultMessage>
}