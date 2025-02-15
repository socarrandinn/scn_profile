import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useActorSecurity } from 'hooks/useActorSecurity';
import { useMemo } from 'react';
// @ts-ignore
import { OperatorFilter, TermFilter, InFilter } from '@dofleini/query-builder';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';

export const useFindProductDiscountProducts = (discount: string | undefined) => {
  const { isProvider, isLogisticProvider, isProductProvider, currentProvider } = useActorSecurity();
  const filterProducts = useMemo(
    () =>
      new InFilter({
        field: 'scheduledOffers.offerId',
        value: [discount],
        objectId: true,
      }),
    [discount],
  );

  const filter = useMemo(() => {
    if (isProvider) {
      if (isLogisticProvider) {
        return new OperatorFilter({
          type: 'AND',
          filters: [
            filterProducts,
            new TermFilter({
              type: 'TERM',
              field: 'warehouse.logistic',
              value: currentProvider?.id,
              objectId: true,
            }),
          ],
        }).toQuery();
      } else if (isProductProvider) {
        return new OperatorFilter({
          type: 'AND',
          filters: [
            filterProducts,
            new TermFilter({
              type: 'TERM',
              field: 'productProvider',
              value: currentProvider?.id,
              objectId: true,
            }),
          ],
        }).toQuery();
      }
    }
    return new OperatorFilter({
      type: 'AND',
      filters: [filterProducts],
    }).toQuery();
  }, [currentProvider?.id, filterProducts, isLogisticProvider, isProductProvider, isProvider]);

  const { fetch, queryKey, filters, search } = useTableRequest(ProductService.search, filter);

  const query = useQuery([PRODUCTS_LIST_KEY, PRODUCT_DISCOUNTS_LIST_KEY, queryKey], fetch, { enabled: !!discount });

  return {
    ...query,
    filters,
    search,
  };
};
