import type { NextFunction, Request, Response } from "express"
import type { paymentType } from "../../types/paymentType.js"
import type { PaymentService } from "../../services/paymentProcess/payment.service.js"
import type { PDFData } from "../../types/PDFData.js"

type processPayemtBody = {
  amount: number
  type: paymentType
  pdfData: PDFData
}

export class PaymentProcessorController {
  constructor(private readonly paymentProcessorService: PaymentService) {}

  public async processPayment(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    const { amount, type, pdfData } = req.body as processPayemtBody

    const paymentProcessed = this.paymentProcessorService.processPayment(
      amount,
      type,
      pdfData
    )

    res.status(200).json({ payment: `Final amount: ${paymentProcessed}` })
  }
}
