export interface PaymentProcessor {
  processPayment(amount: number): number
}
