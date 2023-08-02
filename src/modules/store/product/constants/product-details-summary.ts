import { DetailStackItemRecord } from '@dfl/mui-react-common';

export const PRODUCT_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'phone',
    render: (user) => user?.phone,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'firstName',
    render: (user) => user?.firstName,
    translate: true,
  },
  {
    label: 'lastName',
    render: (user) => user?.lastName,
    translate: true,
  },
];
