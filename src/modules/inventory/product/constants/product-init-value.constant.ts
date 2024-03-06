import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

export const productInitValue: IProductCreate = {
  brand: '',
  category: undefined,
  code: '',
  barcode: '',
  referenceCode: '',
  barCode: '',
  keywords: [],
  media: [],
  name: '',
  productProvider: '',
  related: [],
  score: 0,
  seo: { name: '', description: '', image: { _id: '', url: '', thumb: '', width: 0 } },
  visible: true,
  priceDetails: {
    distribution: {
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
      policy: '',
      regions: '',
    },
  },
  shippingInfo: {
    weight: '',
    free: false,
    rules: {
      place: [],
      via: 'DENY',
    },
    size: { length: '', width: '', height: '' },
    province: '',
    municipality: '',
  },
  rules: {
    limitByAge: false,
    limitByDelivery: false,
    limitByOrder: 0,
  },
};
