import { Constants } from "../../constant/constants.js"
import type { PaymentProcessor } from "../../interfaces/payment-processor.js"
import { Invoice } from "../../services/invoice/generateInvoice.service.js"

export class PaypalProcessor implements PaymentProcessor {
  processPayment(amount: number): number {
    let finalAmount: number = 0.0
    const comissionRate = Constants.COMISSION_RATE.get("paypal")!

    finalAmount = amount + amount * comissionRate

    console.log("Processing paypal payment")

    if (amount > 750) {
      finalAmount += 7
    }
    Invoice.generate()
    return finalAmount
  }
}
