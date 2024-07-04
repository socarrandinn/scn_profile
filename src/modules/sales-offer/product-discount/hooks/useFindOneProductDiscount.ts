import { useQuery } from '@tanstack/react-query';
import { ProductDiscountService } from 'modules/sales-offer/product-discount/services';
import { PRODUCT_DISCOUNTS_ONE_KEY } from 'modules/sales-offer/product-discount/constants';
import { useCallback } from 'react';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';

export const useFindOneProductDiscount = (id: string | null) => {
  const fetch = useCallback(() => ProductDiscountService.getOne(id as string), [id]);
  return useQuery<IProductDiscount>([id, PRODUCT_DISCOUNTS_ONE_KEY], fetch, { enabled: !!id });
};
