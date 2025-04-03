import { CurrencyValue, DetailStackItemRecord } from '@dfl/mui-react-common';
import { IPaymentMethod } from '../interfaces';
import { CurrencyCell } from '../components/CurrencyCell';
import PriceCell from 'modules/security/audit-logs/components/TableCells/PriceCell';
import { GatewayCell } from '../components/GatewayCell';

export const PAYMENT_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'common:fields.minAmount',
    render: (data: IPaymentMethod) => (
      <CurrencyValue value={data?.settings?.minAmount} currency='$' sx={{ fontWeight: 500 }} />
    ),
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.maxAmount',
    render: (data: IPaymentMethod) => (
      <CurrencyValue value={data?.settings?.maxAmount} currency='$' sx={{ fontWeight: 500 }} />
    ),
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.acceptedCurrencies',
    render: (data: IPaymentMethod) => <CurrencyCell data={data?.settings} key={data?._id} />,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:fields.taxes',
    render: (data: IPaymentMethod) => <PriceCell value={data?.settings?.tax} sx={{ fontWeight: 500 }} currency='$' />,
    hideEmpty: true,
    translate: true,
  },
];

export const PAYMENT_GATEWAY_SUMMARY: DetailStackItemRecord[] = [
  ...PAYMENT_DETAILS_SUMMARY,
  {
    label: 'common:fields.gateway',
    render: (data: IPaymentMethod) => <GatewayCell data={data?.settings?.gatewayConfig} />,
    hideEmpty: true,
    translate: true,
  },
];
