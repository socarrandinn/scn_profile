import { Filter } from '@dfl/mui-admin-layout';
import {
  orderChargeBackDateFilter,
  orderCodeFilter,
  orderDeliverTimeTypeFilter,
  orderDeliveryEstimatedDateFilter,
  orderDeliveryStatusFilter,
  orderDeliveryTimeRangeFilter,
  orderEmailFilter,
  orderHasChargeBackFilter,
  orderHasPaymentFilter,
  orderLogisticFilter,
  orderMunicipalityFilter,
  orderOfferFilter,
  orderPaymentDateFilter,
  orderProductItemsFilter,
  orderProvinceFilter,
  orderShippingTypeFilter,
  orderStatusFilter,
  orderTotalAmountFilter,
  orderTotalItemsFilter,
  orderTotalProductsFilter,
  paymentGatewayFilter,
} from 'modules/sales/common/constants/order-filters';

export const paidOrderFilters: Filter[] = [
  orderCodeFilter,
  orderEmailFilter,
  paymentGatewayFilter,
  orderStatusFilter,
  orderDeliverTimeTypeFilter,
  orderShippingTypeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  orderHasPaymentFilter,
  orderHasChargeBackFilter,
  orderOfferFilter,
  orderTotalProductsFilter,
  orderTotalItemsFilter,
  orderLogisticFilter,
  orderDeliveryStatusFilter,
  orderTotalAmountFilter,
  orderProductItemsFilter,

  // todo
  orderDeliveryTimeRangeFilter,

  orderDeliveryEstimatedDateFilter,
  orderChargeBackDateFilter,
  orderPaymentDateFilter,
];

export const defaultPaidOrderFilterKeys: Filter[] = [
  orderCodeFilter,
  orderStatusFilter,
  orderPaymentDateFilter,
  orderTotalAmountFilter,
];
