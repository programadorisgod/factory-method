import express, {
  json,
  urlencoded,
  type NextFunction,
  type Request,
  type Response,
} from "express"
import helmet from "helmet"
import cors from "cors"
import morgan from "morgan"
import dotenv from 'dotenv'

import { getControllers } from "./startup/get-controllers.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT ?? process.argv[2] ?? 3000
const { logger, paymentProcessorRouter, notificationRouter } = getControllers()

app.use(helmet())
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan("dev"))

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ msg: "PONG!!!" })
})

app.use(paymentProcessorRouter)
app.use(notificationRouter)

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log(err.stack, err.message)
  logger.log(`Error: ${err.stack}`)
  logger.error(`Error - route ${req.method}/${req.path}`)
  res.status(500).json({ message: "Ocurrió un error en el servidor" })
})

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "productiopn") {
    console.log(`Server is running in the port ${PORT}`)
  }
})
