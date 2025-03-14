import { Filter } from '@dfl/mui-admin-layout';
import {
  orderChargeBackDateFilter,
  orderCodeFilter,
  orderDeliverTimeTypeFilter,
  orderDeliveryEstimatedDateFilter,
  orderDeliveryMaxTimeFilter,
  orderDeliveryStatusFilter,
  orderDeliveryTimeRangeFilter,
  orderDistributionCenterFilter,
  orderEmailFilter,
  orderHasChargeBackFilter,
  orderHasPaymentFilter,
  orderInDispatchFilter,
  orderLogisticFilter,
  orderMunicipalityFilter,
  orderOfferFilter,
  orderPaymentDateFilter,
  orderProductItemsFilter,
  orderProvinceFilter,
  orderShippingTypeFilter,
  orderStatusFilter,
  orderTotalItemsFilter,
  orderTotalProductsFilter,
} from 'modules/sales/common/constants/order-filters';

export const subOrderFilters: Filter[] = [
  orderCodeFilter,
  orderInDispatchFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,

  orderTotalProductsFilter,
  orderShippingTypeFilter,
  orderDeliverTimeTypeFilter,
  orderDeliveryMaxTimeFilter,

  orderDistributionCenterFilter,
  orderStatusFilter,
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
  orderInDispatchFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  orderTotalProductsFilter,
  orderShippingTypeFilter,
  orderDeliverTimeTypeFilter,
  orderDeliveryMaxTimeFilter,
  /* paymentGatewayFilter,
  paymentMethodFilter, */
  orderDistributionCenterFilter,
  orderStatusFilter,
  orderPaymentDateFilter,
];
