import { Constants } from "../constant/constants.js"
import type { PaymentProcessor } from "../interfaces/payment-processor.js"

export class CreditCardProcessor implements PaymentProcessor {
  processPayment(amount: number): number {
    let finalAmount: number = 0.0
    const comissionRate = Constants.COMISSION_RATE.get("credit-card")!

    finalAmount = amount + amount * comissionRate

    console.log("Processing credit card payment")

    if (amount > 1000) {
      finalAmount += 10
    }

    return finalAmount
  }
}
