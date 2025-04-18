import { Constants } from "../../constant/constants.js"
import type { PaymentProcessor } from "../../interfaces/payment-processor.js"
import { Invoice } from "../../services/invoice/generateInvoice.service.js"

export class DebitCardProcessor implements PaymentProcessor {
  processPayment(amount: number): number {
    let finalAmount: number = 0.0
    const comissionRate = Constants.COMISSION_RATE.get("debit-card")!

    finalAmount = amount + amount * comissionRate

    console.log("Processing debit card payment")

    if (amount > 500) {
      finalAmount += 5
    }
    Invoice.generate()
    return finalAmount
  }
}
