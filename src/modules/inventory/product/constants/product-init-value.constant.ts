import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

export const productInitValue: IProductCreate = {
  brand: '',
  category: undefined,
  code: '',
  keywords: [],
  media: [],
  name: '',
  productProvider: '',
  score: 0,
  seo: { name: '', description: '' },
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
        value: 44,
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
  },
};
