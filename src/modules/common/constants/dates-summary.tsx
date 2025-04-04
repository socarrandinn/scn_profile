import { DateValue, DetailStackItemRecord } from '@dfl/mui-react-common';

export const DATES_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'common:createdAt',
    render: (data: any) => <DateValue value={data?.createdAt} format='MM/dd/yyyy' />,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:updatedAt',
    render: (data: any) => <DateValue value={data?.updatedAt} format='MM/dd/yyyy' />,
    hideEmpty: true,
    translate: true,
  },
];
