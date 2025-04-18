import { CreditCardFactory } from "../../factories/paymentProcess/credit-card-factory.js"
import { DebitCardFactory } from "../../factories/paymentProcess/debit-card-factory.js"
import type { PaymentProcessorFactory } from "../../factories/paymentProcess/payment-processor-factory.js"
import { PaypalFactory } from "../../factories/paymentProcess/paypal-factory.js"
import type { paymentType } from "../../types/paymentType.js"
import type { PDFData } from "../../types/PDFData.js"

export class PaymentService {
  private paymentProcessorFactory!: PaymentProcessorFactory

  private readonly processPayments: Map<paymentType, PaymentProcessorFactory> =
    new Map([
      ["credit-card", new CreditCardFactory()],
      ["debit-card", new DebitCardFactory()],
      ["paypal", new PaypalFactory()],
    ])

  public processPayment(
    amount: number,
    type: paymentType,
    pdfData: PDFData
  ): number {
    this.configureFactory(type)

    const process = this.paymentProcessorFactory.getPaymentProcessor()

    return process.processPayment(amount, pdfData)
  }

  private configureFactory(type: paymentType): void {
    const factory = this.processPayments.get(type)
    if (!factory) {
      throw new Error("Payment method not allowed")
    }

    this.paymentProcessorFactory = factory
  }
}
