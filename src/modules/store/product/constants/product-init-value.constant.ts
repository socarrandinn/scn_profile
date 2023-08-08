import { IProductFormValues } from 'modules/store/product/interfaces/IProductFormValues';
import { PriceType } from 'modules/store/product/interfaces/IProductPriceDetails';

export const productInitValue: IProductFormValues = {
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
  priceMeta: {
    commercial: 0,
    logistic: 0,
    cost: 0,
    shipping: 0,
    offer: 0,
    otherCost: 0,
    platform: 0,
  },
  offer: {
    enabled: false,
    discount: 0,
    discountType: PriceType.FIXED,
  },
};
