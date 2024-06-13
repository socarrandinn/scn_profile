import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductDiscountService } from 'modules/sales-offer/product-discount/services';
import { PRODUCT_DISCOUNTS_LIST_KEY } from 'modules/sales-offer/product-discount/constants';

export const useFindProductDiscounts = () => {
  const { fetch, queryKey } = useTableRequest(ProductDiscountService.search);

  return useQuery([PRODUCT_DISCOUNTS_LIST_KEY, queryKey], fetch);
};
