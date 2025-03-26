import type { NextFunction, Request, Response } from "express"
import type { paymentType } from "../types/paymentType.js"
import type { PaymentService } from "../services/payment.service.js"

type processPayemtBody = {
  amount: number
  type: paymentType
}

export class PaymentProcessorController {
  constructor(private readonly paymentProcessorService: PaymentService) {}

  public async processPayment(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    const { amount, type } = req.body as processPayemtBody

    const paymentProcessed = this.paymentProcessorService.processPayment(
      amount,
      type
    )

    res.status(200).json({ msg: `Final amount: ${paymentProcessed}` })
  }
}
