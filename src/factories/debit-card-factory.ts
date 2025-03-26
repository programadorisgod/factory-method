import type { PaymentProcessor } from "../interfaces/payment-processor.js"
import { DebitCardProcessor } from "../Products/debit-card-processor.js"
import { PaymentProcessorFactory } from "./payment-processor-factory.js"

export class DebitCardFactory extends PaymentProcessorFactory {
  public override createProcessor(): PaymentProcessor {
    return new DebitCardProcessor()
  }
}
