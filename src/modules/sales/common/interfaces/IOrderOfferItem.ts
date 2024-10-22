export interface IOrderOfferItem {
  name: string;
  includeProducts: string[];
  type: string;
  valueDiscount: number;
  creditAmount: number;
  isCoupon: boolean;
  _id: string;
}
