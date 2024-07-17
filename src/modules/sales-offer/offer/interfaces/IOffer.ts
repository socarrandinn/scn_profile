import { IProduct } from 'modules/inventory/common/interfaces';
import { DISCOUNT_VALUE_TYPE, OFFER_TYPE, OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_TYPE } from './offer.type.enum';
import { ILocationMunicipality, ILocationProvince } from '@dfl/location';

export interface IOffer {
  _id?: string;
  name: string;
  description?: string;
  note?: string;
  promotionText?: string;
  status?: string;
  rules: IRuleOffer[];
  type: OFFER_TYPE;
  discountValue: IValueOffer;
  includeProducts: IIncludeProductOffer[];
  fromDate: Date;
  toDate: Date;
  always?: boolean;
}

export interface IRuleOffer {
  fact: RULE_OFFER_TYPE;
  value: number | IValueProductRuleOffer[] | IValueCategoryRuleOffer[] | IValueAddressRuleOffer[];
  operator: OPERATOR_RULE_OFFER_TYPE;
}

export interface IRuleAmountCategory {
  fact: RULE_OFFER_TYPE.CATEGORY_PRICE;
  value: {
    category: string[];
    quantity: number;
  };
  operator: OPERATOR_RULE_OFFER_TYPE;
}

export interface IValueOffer {
  type: DISCOUNT_VALUE_TYPE;
  value: number;
}

export interface IIncludeProductOffer {
  product: IProduct;
  quantity: number;
}

export interface IValueProductRuleOffer {
  product: string;
  quantity: number;
  operator: OPERATOR_RULE_OFFER_TYPE;
}

export interface IValueCategoryRuleOffer {
  category: string;
  quantity: number;
  operator: OPERATOR_RULE_OFFER_TYPE;
}

export interface IValueAddressRuleOffer {
  municipality: ILocationMunicipality;
  state: ILocationProvince;
}
