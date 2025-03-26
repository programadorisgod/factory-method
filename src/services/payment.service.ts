import { CreditCardFactory } from "../factories/credit-card-factory.js"
import { DebitCardFactory } from "../factories/debit-card-factory.js"
import type { PaymentProcessorFactory } from "../factories/payment-processor-factory.js"
import { PaypalFactory } from "../factories/paypal-factory.js"
import type { paymentType } from "../types/paymentType.js"

export class PaymentService {
  private paymentProcessorFactory!: PaymentProcessorFactory

  private readonly processPayments: Map<paymentType, PaymentProcessorFactory> =
    new Map([
      ["credit-card", new CreditCardFactory()],
      ["debit-card", new DebitCardFactory()],
      ["paypal", new PaypalFactory()],
    ])

  public processPayment(amount: number, type: paymentType): number {
    this.configureFactory(type)

    const process = this.paymentProcessorFactory.getPaymentProcessor()

    return process.processPayment(amount)
  }

  private configureFactory(type: paymentType): void {
    const factory = this.processPayments.get(type)
    if (!factory) {
      throw new Error("Payment method not allowed")
    }

    this.paymentProcessorFactory = factory
  }
}
