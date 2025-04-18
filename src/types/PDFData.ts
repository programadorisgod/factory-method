import type { Format, Theme } from "./enums.js"

export type PDFData = {
  includeLogo: boolean
  title: string
  includePaymentDetails: boolean
  includeUserInfo: boolean
  includeTimeStamp: boolean
  footerMessage: string
  format: Format
  theme: Theme
}
