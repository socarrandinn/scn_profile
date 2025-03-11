import { DetailStackItemRecord } from '@dfl/mui-react-common';
import { IPaymentMethod } from '../interfaces';
import { Typography } from '@mui/material';

export const PAYMENT_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'common:fields.minAmount',
    render: (data: IPaymentMethod) => <Typography fontWeight={500}>${(data?.settings?.minAmount).toFixed(2)}</Typography>,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.maxAmount',
    render: (data: IPaymentMethod) => <Typography fontWeight={500}>${(data?.settings?.maxAmount).toFixed(2)}</Typography>,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.currencyAccepted',
    render: (data: IPaymentMethod) => data?.settings?.currency,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.gateway',
    render: (data: IPaymentMethod) => data?.settings?.gatewayConfig?.gateway,
    hideEmpty: true,
    translate: true,
  },
];
