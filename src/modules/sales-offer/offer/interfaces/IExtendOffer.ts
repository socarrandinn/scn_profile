import { IOffer, IRuleAmountCategory, IRuleOffer } from './IOffer';
import { OPERATOR_RULE_OFFER_TYPE, PERIOD_RULE_OFFER_TYPE } from './offer.type.enum';
import { ILocationMunicipality, ILocationProvince } from '@dfl/location';
import { ICategory } from 'modules/inventory/product/interfaces/IProductCreate';

export interface ICommonOffer {
  rulesAmounts: IRuleOffer | undefined;
  rulesUsages: IRuleOffer | undefined;
  rulesQuantityOrders: IRuleOffer[] | undefined;
  rulesAddress: IAddressRuleOffer | undefined;
  rulesProducts: IProductRuleOffer | undefined;
  // rulesCategories: ICategoryRuleOffer[] | undefined;
  rulesAmountsCategory: IRuleAmountCategory | undefined;
  // productToInclude: IProduct;
  quantityToInclude: number;

  section: IRuleSection;
}

export interface IProductRuleOffer extends IRuleOffer {
  // only by validation
  product_item: string | null;
  quantity_item: number;
  operator_item: OPERATOR_RULE_OFFER_TYPE;
}

export interface ICategoryRuleOffer extends IRuleOffer {
  category: ICategory;
  quantityItem: number;
  operator_item_rule: OPERATOR_RULE_OFFER_TYPE;
}
export interface IAddressRuleOffer extends IRuleOffer {
  municipality: ILocationMunicipality;
  state: ILocationProvince;
}

/* rules client */

export interface IClientOffer {
  // rules client
  rulesOrderCountByTime: Omit<IRuleOffer, 'value'> & {
    value: {
      amount: number;
      interval: PERIOD_RULE_OFFER_TYPE;
    };
  };
  rulesAmountSpentByTime: Omit<IRuleOffer, 'value'> & {
    value: {
      amount: number;
      interval: PERIOD_RULE_OFFER_TYPE;
    };
  };
  rulesLongevity: Omit<IRuleOffer, 'value'> & {
    value: {
      amount: number;
      unit: PERIOD_RULE_OFFER_TYPE;
    };
  };
  rulesSpecificClientList: Omit<IRuleOffer, 'value'> & {
    value: string[];
  };

  rulesClientUsage: IRuleOffer;
}

export interface IExtendOffer extends IOffer, IClientOffer, ICommonOffer {}

export interface IRuleSection {
  product: boolean;
  // category: boolean;
  address: boolean;
  amount: boolean;
  usage: boolean;
  quantityOrder: boolean;
  amountCategory: boolean;

  // client
  orderCountByTime: boolean;
  amountSpentByTime: boolean;
  longevity: boolean;
  specificClientList: boolean;
  clientUsage: boolean;
}
