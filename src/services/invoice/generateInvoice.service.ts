import { PDFBuilder } from "../../builders/PDFBuilder.js"
import { PDFDocumentGenerator } from "../../utils/invoice/PDFDocumentGenerator.js"
import { Format, Theme } from "../../types/enums.js"
import type { PDFData } from "../../types/PDFData.js"

export class Invoice {
  public static generate(PDFData: PDFData): void {
    const builder = new PDFBuilder()
      .setFormat(PDFData.format)
      .setTheme(PDFData.theme)
      .setIncludeLogo(PDFData.includeLogo)
      .setTitle(PDFData.title && "Factura de Compra")
      .setIncludePaymentDetails(PDFData.includePaymentDetails)
      .setIncludeUserInfo(PDFData.includeUserInfo)
      .setIncludeTimestamp(PDFData.includeTimeStamp)
      .setFooterMessage(PDFData.footerMessage && "Gracias por su compra")

    const options = builder.build()

    const generator = new PDFDocumentGenerator(options)
    generator.generate(`invoice-${crypto.randomUUID()}.pdf`)
  }
}
