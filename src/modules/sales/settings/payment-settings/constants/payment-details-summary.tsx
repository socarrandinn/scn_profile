import { CurrencyValue, DetailStackItemRecord } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';
import { IPaymentMethod } from '../interfaces';

export const PAYMENT_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'common:fields.minAmount',
    render: (data: IPaymentMethod) => <CurrencyValue value={data?.settings?.minAmount} currency='$' sx={{ fontWeight: 500 }} />,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.maxAmount',
    render: (data: IPaymentMethod) => <CurrencyValue value={data?.settings?.maxAmount} currency='$' sx={{ fontWeight: 500 }} />,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.acceptedCurrencies',
    render: (data: IPaymentMethod) => <Typography sx={{ fontWeight: 500 }}>{data?.settings?.currency.join(', ')}</Typography>,
    hideEmpty: true,
    translate: true,
  },
];
