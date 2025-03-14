import { CurrencyValue, DetailStackItemRecord } from '@dfl/mui-react-common';
import { IPaymentMethod } from '../interfaces';
import { CurrencyCell } from '../components/CurrencyCell';

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
    render: (data: IPaymentMethod) => <CurrencyCell data={data?.settings} key={data?._id} />,
    hideEmpty: true,
    translate: true,
  },
];
