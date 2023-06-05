import { DetailStackItemRecord } from '@dfl/mui-react-common';
import { format } from 'date-fns';
import { DATE_FORMAT } from 'settings/format';

export const DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'createdAt',
    render: (data) => data && format(new Date(data?.createdAt), DATE_FORMAT),
    translate: true,
  },
];
