import { useQuery } from '@tanstack/react-query';
import { SupplierService } from 'modules/inventory/provider/supplier/services';
import { SUPPLIER_ONE_KEY } from 'modules/inventory/provider/supplier/constants';
import { useCallback } from 'react';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

export const useFindOneProducts = (id: string | null) => {
  const fetch = useCallback(() => SupplierService.getOne(id as string), [id]);
  return useQuery<ISupplier>([id, SUPPLIER_ONE_KEY], fetch, { enabled: !!id });
};
