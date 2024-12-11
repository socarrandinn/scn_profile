import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductCreate, POLICY_ENUM } from 'modules/inventory/product/interfaces/IProductCreate';

export const productInitValue: IProductCreate = {
  brand: '',
  category: undefined,
  code: '',
  barcode: '',
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
      otherCost: [],
      cost: {
        type: PriceType.FIXED,
        value: 0,
      },
      commercial: {
        type: PriceType.PERCENT,
        value: 0,
      },
      offer: {
        type: PriceType.PERCENT,
        value: 0,
      },
      logistic: {
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
      logistic: 0,
      shipping: 0,
      commercial: 0,
      offer: 0,
      platform: 0,
      total: 0,
      otherCost: [],
      warehouses: [],
    },
  },
  shippingSettings: {
    freeShipping: false,
    estimatedTime: {
      from: 0,
      to: 0,
    },
    shippingInfo: {
      weight: 0,
      height: 0,
      length: 0,
      width: 0,
      fragile: false,
      needRefrigeration: false,
    },
  },

  rules: {
    limitByAge: false,
    freeShipping: false,
    limitByOrder: 0,
    needCi: false,
    deliveryRules: {
      policy: POLICY_ENUM.ALLOW,
      regions: [],
    },
  },
  tags: {
    product: [],
    supplier: [],
  },
  otherTags: [],
};
