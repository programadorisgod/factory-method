import { Constants } from "../../constant/constants.js"
import type { PaymentProcessor } from "../../interfaces/payment-processor.js"
import { Invoice } from "../../services/invoice/generateInvoice.service.js"
import type { PDFData } from "../../types/PDFData.js"

export class CreditCardProcessor implements PaymentProcessor {
  processPayment(amount: number, pdfData: PDFData): number {
    let finalAmount: number = 0.0
    const comissionRate = Constants.COMISSION_RATE.get("credit-card")!

    finalAmount = amount + amount * comissionRate

    console.log("Processing credit card payment")

    if (amount > 1000) {
      finalAmount += 10
    }
    Invoice.generate(pdfData)
    return finalAmount
  }
}
