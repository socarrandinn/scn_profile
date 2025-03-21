import { Filter } from '@dfl/mui-admin-layout';
import {
  orderCodeFilter,
  orderEmailFilter,
  orderStatusFilter,
  // orderDeliveryStatusFilter,
  orderHasPaymentFilter,
  orderMunicipalityFilter,
  // orderOfferFilter,
  orderPaidAtFilter,
  orderProductItemsFilter,
  orderProvinceFilter,
  orderTotalAmountFilter,
  orderTotalItemsFilter,
  orderTotalProductsFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
  orderOfferFilter,
  orderHasChargeBackFilter,
} from 'modules/sales/common/constants/order-filters';

export const paidOrderFilters: Filter[] = [
  orderCodeFilter,
  orderEmailFilter,
  orderStatusFilter,
  orderHasPaymentFilter,
  orderOfferFilter,
  orderTotalProductsFilter,
  orderPaidAtFilter,
  orderHasChargeBackFilter,

  orderProvinceFilter,
  orderMunicipalityFilter,

  orderTotalAmountFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
  orderTotalItemsFilter,
  orderProductItemsFilter
];

export const defaultPaidOrderFilterKeys: Filter[] = [
  orderCodeFilter,
  orderEmailFilter,
  orderStatusFilter,
  orderHasPaymentFilter,

  orderTotalProductsFilter,
  orderPaidAtFilter,
  orderHasChargeBackFilter,

  orderProvinceFilter,
  orderMunicipalityFilter,

  orderTotalAmountFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
  orderTotalItemsFilter,
  orderProductItemsFilter,
];
