import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { OperatorFilter } from '@dofleini/query-builder';

export const useExportSelected = (filters: any, selected: any) => {
  const wFilters = useMemo(() => {
    if (isEmpty(selected)) return filters?.toQuery();
    return new OperatorFilter({
      type: 'OR',
      filters: selected?.map((id: any) => ({
        type: 'TERM',
        field: '_id',
        value: id,
      })),
    })?.toQuery();
  }, [filters, selected]);

  return { wFilters };
};

export const useExportTicketSelected = (filters: any, selected: any) => {
  const wFilters = useMemo(() => {
    if (isEmpty(selected)) return filters?.toQuery();
    return new OperatorFilter({
      type: 'OR',
      filters: selected?.map((id: any) => ({
        type: 'TERM',
        field: '_id',
        value: id,
        objectId: false,
        isDate: false
      })),
    })?.toQuery();
  }, [filters, selected]);

  return { wFilters };
};
