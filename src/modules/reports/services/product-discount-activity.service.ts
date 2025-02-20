import { EntityApiService } from '@dfl/react-security';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

class ProductDiscountActivityService extends EntityApiService<IWarehouse> {
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

export default new ProductDiscountActivityService('/ms-inventory/api/products');

const mock = [
  {
    _id: {
      year: 2025,
      month: 2,
      day: 13,
    },
    products: 9,
    offers: 5,
  },
  {
    _id: {
      year: 2025,
      month: 2,
      day: 17,
    },
    products: 45,
    offers: 5,
  },
  {
    _id: {
      year: 2025,
      month: 2,
      day: 18,
    },
    products: 33,
    offers: 3,
  },
  {
    _id: {
      year: 2025,
      month: 2,
      day: 19,
    },
    products: 45,
    offers: 12,
  },
  {
    _id: {
      year: 2025,
      month: 2,
      day: 20,
    },
    products: 100,
    offers: 60,
  },
];
