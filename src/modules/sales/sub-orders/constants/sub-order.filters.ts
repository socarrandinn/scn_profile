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

export const subOrderFilters: Filter[] = [
  orderCodeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  orderStatusFilter,
  orderShippingTypeFilter,
  orderTotalProductsFilter,
  orderTotalAmountFilter,
  orderDeliverTimeTypeFilter,
  paymentGatewayFilter,
  orderPaymentDateFilter,

  orderTotalItemsFilter,
  orderEmailFilter,
  orderHasPaymentFilter,
  orderHasChargeBackFilter,
  orderOfferFilter,
  orderLogisticFilter,
  orderDeliveryStatusFilter,
  orderProductItemsFilter,

  // todo
  orderDeliveryTimeRangeFilter,
  orderDeliveryEstimatedDateFilter,
  orderChargeBackDateFilter,
];

export const defaultSubOrderFilterKeys: Filter[] = [
  orderCodeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  orderStatusFilter,
  orderShippingTypeFilter,
  orderTotalProductsFilter,
  orderTotalAmountFilter,
  orderDeliverTimeTypeFilter,
  paymentGatewayFilter,
  orderPaymentDateFilter,
];
