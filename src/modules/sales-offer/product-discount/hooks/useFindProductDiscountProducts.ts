import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useActorSecurity } from 'hooks/useActorSecurity';
import { useMemo } from 'react';
//@ts-ignore
import { OperatorFilter, TermFilter, InFilter } from '@dofleini/query-builder';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';

export const useFindProductDiscountProducts = (discount: string | undefined) => {
  const { isProvider, isLogisticProvider, isProductProvider, currentProvider } = useActorSecurity();
  const filterProducts = useMemo(
    () => new InFilter ({
      field: 'scheduledOffers',
      value: [discount],
      objectId: true,
    }),
    [discount],
  );

  let filter = useMemo(() => {
    if (isProvider) {
      if (isLogisticProvider) {
        return new OperatorFilter({
          type: 'AND',
          filters: [
            filterProducts,
            new TermFilter({
              type: 'TERM',
              field: 'stores.logistic',
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

  const query = useQuery([PRODUCTS_LIST_KEY, queryKey], fetch, { enabled: !!discount });

  return {
    ...query,
    filters,
    search,
  };
};
