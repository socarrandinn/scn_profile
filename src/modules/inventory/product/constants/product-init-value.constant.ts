import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductCreate, POLICY_ENUM } from 'modules/inventory/product/interfaces/IProductCreate';

export const productInitValue: IProductCreate = {
  brand: 'marca',
  category: undefined,
  code: 'cod725367253',
  barcode: 'bar82367238',
  slug: '',
  referenceCode: '',
  keywords: [],
  media: [],
  name: '',
  productProvider: '',
  related: [],
  score: 0,
  seo: { name: '', description: '', image: { _id: '', thumb: '', url: '', width: 0 } },
  visible: true,
  priceDetails: {
    distribution: {
      cost: {
        type: PriceType.FIXED,
        value: 3,
      },
      commercial: {
        type: PriceType.PERCENT,
        value: 3,
      },
      offer: {
        type: PriceType.PERCENT,
        value: 20,
      },
      logistic: {
        type: PriceType.PERCENT,
        value: 2,
      },
      otherCost: {
        type: PriceType.PERCENT,
        value: 0,
      },
      shipping: {
        type: PriceType.PERCENT,
        value: 0,
      },
      platform: {
        type: PriceType.PERCENT,
        value: 0,
      },
    },
    values: {
      cost: 0,
      otherCost: 0,
      logistic: 0,
      shipping: 0,
      commercial: 0,
      offer: 0,
      platform: 0,
      total: 0,
    },
  },
  shippingSettings: {
    freeShipping: false,
    estimatedTime: {
      from: 0,
      to: 0,
    },
    deliveryRules: {
      policy: POLICY_ENUM.ALLOW,
      regions: [],
    },
    shippingInfo: {
      weight: 0,
      height: 0,
      length: 0,
      width: 0,
    },
  },

  rules: {
    limitByAge: false,
    freeShipping: false,
    limitByOrder: 0,
    needCi: false,
  },
};
