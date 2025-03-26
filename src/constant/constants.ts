import type { paymentType } from "../types/paymentType.js"

export class Constants {
  public static readonly BASE_URL = "/api/v1"

  public static readonly COMISSION_RATE: Map<paymentType, number> = new Map([
    ["credit-card", 0.03],
    ["paypal", 0.02],
    ["debit-card", 0.01],
  ])
}
