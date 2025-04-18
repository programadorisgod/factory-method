import { Theme, Format } from "./enums.js";

export interface PDFBuildOptions {
  format: Format;
  theme?: Theme;
  includeLogo?: boolean;
  title?: string;
  includePaymentDetails?: boolean;
  includeUserInfo?: boolean;
  includeTimestamp?: boolean;
  footerMessage?: string;
}