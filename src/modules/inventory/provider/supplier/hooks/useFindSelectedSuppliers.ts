import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTable } from '@dfl/mui-admin-layout';
import { InFilter } from '@dofleini/query-builder';
import { SupplierService } from '../services';
import { SUPPLIER_LIST_KEY } from '../constants';

export const useFindSelectedSuppliers = () => {
  const { selected } = useTable();

  const filters = useMemo(() => new InFilter({ field: '_id', value: selected, objectId: true }), [selected]);

  return useQuery([SUPPLIER_LIST_KEY, selected], () => SupplierService.search({ filters }));
};
