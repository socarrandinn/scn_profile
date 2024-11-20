import { IProductPriceDetails } from '../interfaces/IProductPriceDetails';

export const initValueProductPriceDetails: Partial<IProductPriceDetails> = {
  values: {
    cost: 0,
    offer: 0,
    otherCost: [],
    logistic: 0,
    shipping: 0,
    commercial: 0,
    platform: 0,
    total: 0,
  },
};
