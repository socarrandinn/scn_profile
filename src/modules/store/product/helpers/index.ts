import { IProductFormValues } from 'modules/store/product/interfaces/IProductFormValues';
import { IProductCreate } from 'modules/store/product/interfaces/IProductCreate';
import { PriceType } from 'modules/store/product/interfaces/IProductPriceDetails';

export const payloadAdapterCreate = (values: IProductFormValues): IProductCreate => ({
  ...values,
  priceDetails: {
    distribution: {
      cost: {
        value: values.priceMeta.cost,
        type: PriceType.FIXED,
      },
      commercial: {
        value: values.priceMeta.commercial,
        type: PriceType.PERCENT,
      },
      logistic: {
        value: values.priceMeta.logistic,
        type: PriceType.PERCENT,
      },
      otherCost: {
        value: values.priceMeta.otherCost,
        type: PriceType.PERCENT,
      },
      offer: {
        value: values.priceMeta.offer,
        type: PriceType.PERCENT,
      },
      platform: {
        value: values.priceMeta.platform,
        type: PriceType.PERCENT,
      },
      shipping: {
        value: values.priceMeta.shipping,
        type: PriceType.PERCENT,
      },
    },
  },
});
