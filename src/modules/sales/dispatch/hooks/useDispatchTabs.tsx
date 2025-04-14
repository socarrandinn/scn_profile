import { useTableRequest } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { useQuery } from '@tanstack/react-query';
import { SubOrderService } from 'modules/sales/sub-orders/services';
import { useMemo } from 'react';
import { useDispatchDetail } from '../contexts/dispatchContext';
import { ProductService } from 'modules/inventory/product/services';
import {
  DISPATCH_PRODUCT_LIST_KEY,
  DISPATCH_SUB_ORDER_LIST_KEY,
  DISPATCH_WAREHOUSE_LIST_KEY,
} from 'modules/sales/common/constants/order-query';
import { WarehouseService } from 'modules/inventory/warehouse/services';

export const useDispatchFilter = () => {
  const { dispatch } = useDispatchDetail();
  /* filter order by dispatch */
  const _filters = useMemo(
    () => new TermFilter({ field: 'dispatch', value: dispatch?._id, objectId: true }),
    [dispatch?._id],
  );

  return {
    _filters,
    dispatch,
  };
};

export const useFindDispatchSubOrders = () => {
  const { _filters, dispatch } = useDispatchFilter();
  const { fetch, queryKey, search, filters } = useTableRequest(SubOrderService.search, _filters);

  const query = useQuery([DISPATCH_SUB_ORDER_LIST_KEY, queryKey], fetch, { enabled: !!dispatch?._id });

  return {
    ...query,
    filters,
    search,
  };
};

export const useFindDispatchProducts = () => {
  const { dispatch } = useDispatchFilter();
  const { fetch, queryKey, search, filters } = useTableRequest(ProductService.search);

  const query = useQuery([DISPATCH_PRODUCT_LIST_KEY, queryKey], fetch, { enabled: !!dispatch?._id });

  return {
    ...query,
    filters,
    search,
  };
};

export const useFindDispatchWarehouses = () => {
  const { dispatch } = useDispatchFilter();
  const { fetch, queryKey, search, filters } = useTableRequest(WarehouseService.search);

  const query = useQuery([DISPATCH_WAREHOUSE_LIST_KEY, queryKey], fetch, { enabled: !!dispatch?._id });

  return {
    ...query,
    filters,
    search,
  };
};
