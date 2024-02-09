import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { SupplierService } from 'modules/inventory/provider/supplier/services';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants';

export const useFindSuppliers = () => {
  const { fetch } = useTableRequest(SupplierService.search);

  return useQuery([SUPPLIER_LIST_KEY], fetch);
};
