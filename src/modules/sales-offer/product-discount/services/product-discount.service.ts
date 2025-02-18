import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { InFilter } from '@dofleini/query-builder';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';

class ProductDiscountService extends EntityApiService<IProductDiscount> {
  removeProduct = (productDiscountId: string, products: any) => {
    return ApiClientService.patch(this.getPath(`/${productDiscountId}/remove`), {
      filters: new InFilter({ field: '_id', value: products, objectId: true }),
    });
  };

  addProduct = (productDiscountId: string, products: any) => {
    return ApiClientService.patch(this.getPath(`/${productDiscountId}/add`), {
      filters: products,
    });
  };

  updateStatus = (productDiscountId: string, enabled: boolean) => {
    return ApiClientService.patch(this.getPath(`/${productDiscountId}/enabled`), {
      enabled,
    });
  };
}

export default new ProductDiscountService('/ms-sales/api/product-offers');
