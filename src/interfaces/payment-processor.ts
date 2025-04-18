import type { PDFData } from "../types/PDFData.js"

export interface PaymentProcessor {
  processPayment(amount: number, pdfData: PDFData): number
}
