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

export const preOrderFilters: Filter[] = [
  orderCodeFilter,
  orderEmailFilter,
  paymentGatewayFilter,
  orderStatusFilter,
  orderShippingTypeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  orderHasPaymentFilter,
  orderHasChargeBackFilter,
  orderOfferFilter,
  orderTotalProductsFilter,
  orderTotalItemsFilter,
  orderLogisticFilter,
  orderDeliverTimeTypeFilter,
  orderDeliveryStatusFilter,
  orderTotalAmountFilter,
  orderProductItemsFilter,
  // todo
  orderDeliveryTimeRangeFilter,

  orderDeliveryEstimatedDateFilter,
  orderChargeBackDateFilter,
  orderPaymentDateFilter,
];

export const defaultPreOrderFilterKeys: Filter[] = [
  orderCodeFilter,
  orderStatusFilter,
  orderTotalAmountFilter,
  orderPaymentDateFilter,
];
