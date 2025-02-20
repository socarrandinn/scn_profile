import { EntityApiService } from '@dfl/react-security';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

class SaleOfferActivityService extends EntityApiService<IWarehouse> {
  histogram = (productDiscountId: string, params?: any, config?: any): any => {
    if (productDiscountId) {
      return new Promise((resolve) => {
        resolve(mock);
      });
      /* return this.handleSearchResponse(
        ApiClientService.post(
          this.getPath(`/${productDiscountId}/stock-activity/search`),
          { ...params, populate: true },
          config,
        ),
        10,
      ); */
    }
    throw new Error('You must need a productDiscountId');
  };
}

export default new SaleOfferActivityService('/ms-sales/api/offers');

const mock = [
  {
    _id: {
      year: 2025,
      month: 2,
      day: 13,
    },
    orders: 9,
    offers: 5,
  },
  {
    _id: {
      year: 2025,
      month: 2,
      day: 17,
    },
    orders: 45,
    offers: 5,
  },
  {
    _id: {
      year: 2025,
      month: 2,
      day: 18,
    },
    orders: 33,
    offers: 3,
  },
  {
    _id: {
      year: 2025,
      month: 2,
      day: 19,
    },
    orders: 45,
    offers: 12,
  },
  {
    _id: {
      year: 2025,
      month: 2,
      day: 20,
    },
    orders: 100,
    offers: 60,
  },
];
