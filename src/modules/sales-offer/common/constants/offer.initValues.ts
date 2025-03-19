import { ILocationMunicipality, ILocationProvince } from '@dfl/location';
import { IProduct } from 'modules/inventory/common/interfaces';
import { IOffer, IValueAddressRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { IClientOffer, ICommonOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import {
  DISCOUNT_VALUE_TYPE,
  OFFER_TYPE,
  OPERATOR_RULE_OFFER_TYPE,
  PERIOD_RULE_OFFER_TYPE,
  RULE_OFFER_FACT_TYPE,
} from 'modules/sales-offer/offer/interfaces/offer.type.enum';

export const initOffer: IOffer = {
  type: OFFER_TYPE.SHIPPING_DISCOUNT,
  fromDate: new Date(),
  toDate: new Date(),
  name: '',
  description: '',
  promotionText: '',
  note: '',
  includeProducts: [],
  twoForOne: [],

  discountValue: {
    type: DISCOUNT_VALUE_TYPE.FIXED,
    value: 0,
  },
  always: true,
  rules: [],
};

export const initRuleCommonOffer: ICommonOffer = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  productToInclude: {} as IProduct,
  rulesAmounts: {
    operator: OPERATOR_RULE_OFFER_TYPE.GREATER_THAN,
    fact: RULE_OFFER_FACT_TYPE.AMOUNT,
    value: 0,
  },
  rulesUsages: {
    operator: OPERATOR_RULE_OFFER_TYPE.LESS_THAN,
    fact: RULE_OFFER_FACT_TYPE.USAGE,
    value: 0,
  },
  rulesQuantityOrders: [],
  rulesAddress: {
    operator: OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE,
    fact: RULE_OFFER_FACT_TYPE.ADDRESS,
    value: [] as IValueAddressRuleOffer[],
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    municipality: {} as ILocationMunicipality,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    state: {} as ILocationProvince,
  },
  rulesProducts: {
    operator: OPERATOR_RULE_OFFER_TYPE.ALL,
    fact: RULE_OFFER_FACT_TYPE.PRODUCT,
    value: [],

    // only by validation
    product_item: null,
    quantity_item: 0,
    operator_item: OPERATOR_RULE_OFFER_TYPE.EQUAL,
  },

  rulesAmountsCategory: {
    operator: OPERATOR_RULE_OFFER_TYPE.ALL,
    fact: RULE_OFFER_FACT_TYPE.CATEGORY_PRICE,
    value: [],

    // only by validation
    amount_item: 0,
    operator_item: OPERATOR_RULE_OFFER_TYPE.EQUAL,
    category_item: null,
  },

  // sections
  section: {
    product: false,
    amount: false,
    usage: false,
    quantityOrder: false,
    address: false,
    amountCategory: false,

    // client section
    orderCountByTime: false,
    amountSpentByTime: false,
    longevity: false,
    specificClientList: false,
    clientUsage: false,
  },

  quantityToInclude: 0,
};

export const initRuleClient: IClientOffer = {
  rulesClientUsage: {
    operator: OPERATOR_RULE_OFFER_TYPE.LESS_THAN,
    fact: RULE_OFFER_FACT_TYPE.CLIENT_USAGES,
    value: 0,
  },

  rulesOrderCountByTime: {
    fact: RULE_OFFER_FACT_TYPE.ORDER_COUNT_BY_TIME,
    operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
    value: {
      amount: 0,
      interval: PERIOD_RULE_OFFER_TYPE.WEEK,
    },
  },
  rulesAmountSpentByTime: {
    fact: RULE_OFFER_FACT_TYPE.AMOUNT_SPENT_BY_TIME,
    operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
    value: {
      amount: 0,
      interval: PERIOD_RULE_OFFER_TYPE.WEEK,
    },
  },
  rulesLongevity: {
    fact: RULE_OFFER_FACT_TYPE.LONGEVITY,
    operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
    value: {
      amount: 0,
      unit: PERIOD_RULE_OFFER_TYPE.DAY,
    },
  },
  rulesSpecificClientList: {
    fact: RULE_OFFER_FACT_TYPE.SPECIFIC_CLIENT_LIST,
    operator: OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE,
    value: [],
  },
};
