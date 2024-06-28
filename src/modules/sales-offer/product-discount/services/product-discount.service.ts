import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { InFilter } from '@dofleini/query-builder';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';

class ProductDiscountService extends EntityApiService<IProductDiscount> {
  removeProduct = (productDiscountId: string, products: any) => {
    return ApiClientService.patch(this.getPath(`/${ productDiscountId }/remove`), {
      filters: new InFilter({ field: '_id', value: products, objectId: true }),
    });
  };

}

export default new ProductDiscountService('/ms-inventory/api/product-offers');
