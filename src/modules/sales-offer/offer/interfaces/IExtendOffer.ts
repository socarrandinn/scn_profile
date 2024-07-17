import { IProduct } from 'modules/inventory/common/interfaces';
import { IOffer, IRuleAmountCategory, IRuleOffer } from './IOffer';
import { OPERATOR_RULE_OFFER_TYPE } from './offer.type.enum';
import { ILocationMunicipality, ILocationProvince } from '@dfl/location';
import { ICategory } from 'modules/inventory/product/interfaces/IProductCreate';

export interface IExtendOffer extends IOffer {
  productSection: boolean;
  categorySection: boolean;
  addressSection: boolean;
  amountSection: boolean;
  usageSection: boolean;
  quantityOrderSection: boolean;
  amountCategorySection: boolean;

  rulesAmounts: IRuleOffer[] | undefined;
  rulesUsages: IRuleOffer[] | undefined;
  rulesQuantityOrders: IRuleOffer[] | undefined;
  rulesAddress: IAddressRuleOffer | undefined;
  rulesProducts: IProductRuleOffer[] | undefined;
  rulesCategories: ICategoryRuleOffer[] | undefined;
  rulesAmountsCategory: IRuleAmountCategory | undefined;
  productToInclude: IProduct;
  quantityToInclude: number;
}

export interface IProductRuleOffer extends IRuleOffer {
  product: IProduct | null;
  quantityItem: number;
  operator_item_rule: OPERATOR_RULE_OFFER_TYPE;
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
