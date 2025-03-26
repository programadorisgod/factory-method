import { LoggerService } from "../utils/Logger/loger.js"

export function getControllers() {
  const logger = new LoggerService()

  return {
    logger,
  }
}
