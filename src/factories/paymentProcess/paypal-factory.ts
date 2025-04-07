import type { PaymentProcessor } from "../../interfaces/payment-processor.js"
import { PaypalProcessor } from "../../Products/paymentProcess/paypal-processor.js"
import { PaymentProcessorFactory } from "./payment-processor-factory.js"

export class PaypalFactory extends PaymentProcessorFactory {
  public override createProcessor(): PaymentProcessor {
    return new PaypalProcessor()
  }
}
