import { createLogger, transports, format, Logger } from "winston"

const { combine, timestamp, printf, colorize, simple, json } = format

export class LoggerService {
  private readonly logger: Logger
  constructor() {
    const isDevelopment = process.env.NODE_ENV === "development"

    const fileName = isDevelopment ? `error.log` : `/build/error.log`

    const devFormat = printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`
    })

    this.logger = createLogger({
      level: isDevelopment ? "debug" : "info",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        isDevelopment ? colorize() : json(),
        isDevelopment ? devFormat : simple()
      ),
      transports: [
        new transports.Console(),
        new transports.File({
          filename: fileName,
          level: "error",
        }),
      ],
    })
  }

  log(message: string) {
    this.logger.info(message)
  }

  error(message: string) {
    this.logger.error(message)
  }

  warn(message: string) {
    this.logger.warn(message)
  }

  debug(message: string) {
    this.logger.debug(message)
  }
}
