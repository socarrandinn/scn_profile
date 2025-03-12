import { CurrencyValue, DetailStackItemRecord } from '@dfl/mui-react-common';
import { IPaymentMethod } from '../interfaces';

export const PAYMENT_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'common:fields.minAmount',
    render: (data: IPaymentMethod) => <CurrencyValue value={data?.settings?.minAmount} currency='$' />,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.maxAmount',
    render: (data: IPaymentMethod) => <CurrencyValue value={data?.settings?.maxAmount} currency='$' />,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.acceptedCurrencies',
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
