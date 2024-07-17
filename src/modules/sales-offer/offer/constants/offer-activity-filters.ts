import { Filter, FilterType } from '@dfl/mui-admin-layout';

export const filters: Filter[] = [
  {
    filter: 'product:date',
    translate: true,
    type: FilterType.DATE,
    key: 'date',
    field: 'payment.payedDate',
  },
];
