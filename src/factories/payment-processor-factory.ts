import type { PaymentProcessor } from "../interfaces/payment-processor.js"

export abstract class PaymentProcessorFactory {
  public getPaymentProcessor(): PaymentProcessor {
    const paymentProcessor = this.createProcessor()
    return paymentProcessor
  }

  public abstract createProcessor(): PaymentProcessor
}
