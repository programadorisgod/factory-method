import type { PaymentProcessor } from "../../interfaces/payment-processor.js"
import { CreditCardProcessor } from "../../Products/paymentProcess/credit-card-processor.js"
import { PaymentProcessorFactory } from "./payment-processor-factory.js"

export class CreditCardFactory extends PaymentProcessorFactory {
  public override createProcessor(): PaymentProcessor {
    return new CreditCardProcessor()
  }
}
