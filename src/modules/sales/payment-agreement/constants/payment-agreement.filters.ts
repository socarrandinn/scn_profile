import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants';
import { PAYMENT_AGREEMENT_STATUS_ENUM } from './payment-agreement.enum';

export const quantityOrderFilter: Filter = {
  filter: 'paymentAgreement:fields.quantityOrders',
  field: 'quantityOrders',
  translate: true,
  type: FilterType.NUMBER,
  key: 'quantityOrders',
};
export const shippingCostFilter: Filter = {
  filter: 'paymentAgreement:fields.shippingCost',
  field: 'shippingCost',
  translate: true,
  type: FilterType.NUMBER,
  key: 'shippingCost',
};

export const statusFilter: Filter = {
  filter: 'paymentAgreement:fields.status',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'status',
  field: 'status',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'status', value });
  },
  options: Object.keys(PAYMENT_AGREEMENT_STATUS_ENUM).map((key) => ({
    value: key,
    translate: true,
    label: `paymentAgreement:status.${key.toLocaleLowerCase()}`,
  })),
};

export const sendDateFilter: Filter = {
  filter: 'paymentAgreement:fields.sendDate',
  translate: true,
  type: FilterType.DATE,
  key: 'sendDate',
  field: 'sendDate',
};

export const paymentAgreementFilters = [
  quantityOrderFilter,
  shippingCostFilter,
  statusFilter,
  sendDateFilter,
  createdATFilter,
];
