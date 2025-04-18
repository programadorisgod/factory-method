import { PDFBuilder } from "../../builders/PDFBuilder.js";
import { PDFDocumentGenerator } from "../../utils/invoice/PDFDocumentGenerator.js";
import { Format, Theme } from "../../types/enums.js";


export class Invoice {
  public static generate(): void {
    const builder = new PDFBuilder()
    .setFormat(Format.LETTER)
    .setTheme(Theme.DARK)
    .setIncludeLogo(true)
    .setTitle("Factura de Compra")
    .setIncludePaymentDetails(true)
    .setIncludeUserInfo(true)
    .setIncludeTimestamp(false)
    .setFooterMessage("Gracias por su compra");

    const options = builder.build();

    const generator = new PDFDocumentGenerator(options);
    generator.generate(`fact-${crypto.randomUUID()}.pdf`);
  }
}