import { Filter } from '@dfl/mui-admin-layout';
import { orderChargeBackDateFilter, orderCodeFilter, orderDeliverTimeTypeFilter, orderDeliveryMaxTimeFilter, orderEmailFilter, orderHasChargeBackFilter, orderHasPaymentFilter, orderLogisticFilter, orderMunicipalityFilter, orderOfferFilter, orderPaymentDateFilter, orderProvinceFilter, orderShippingTypeFilter, orderStatusFilter, orderTotalProductFilter, paymentGatewayFilter } from 'modules/sales/common/constants/order-filters';

export const paidOrderFilters: Filter[] = [
  orderCodeFilter,
  orderEmailFilter,
  paymentGatewayFilter,
  orderStatusFilter,
  orderDeliverTimeTypeFilter,
  orderShippingTypeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  orderPaymentDateFilter,
  orderChargeBackDateFilter,
  orderHasPaymentFilter,
  orderHasChargeBackFilter,
  orderDeliveryMaxTimeFilter,
  orderOfferFilter,
  orderTotalProductFilter,
  orderLogisticFilter,
  // orderQuantityFilter,
  // orderAmountFilter,
  // orderItemsFilter,
  // orderProductItemsFilter,
];
