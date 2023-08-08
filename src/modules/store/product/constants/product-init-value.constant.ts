import { IProductCreate } from 'modules/store/product/interfaces/IProductCreate';

export const productInitValue: IProductCreate = {
  brand: '',
  category: undefined,
  code: '',
  keywords: [],
  media: [],
  name: '',
  productProvider: '',
  score: 0,
  seo: undefined,
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
};
