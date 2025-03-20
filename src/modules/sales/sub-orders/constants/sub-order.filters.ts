import { Filter } from '@dfl/mui-admin-layout';
import {
  orderCodeFilter,
  orderDeliverTimeTypeFilter,
  orderDeliveryDueDateFilter,
  // orderDeliveryStatusFilter,
  orderDistributionCenterFilter,
  orderEmailFilter,
  orderHasChargeBackFilter,
  orderInDispatchFilter,
  orderLogisticFilter,
  // orderLogisticFilter,
  orderMunicipalityFilter,
  orderOfferFilter,
  // orderOfferFilter,
  orderPaidAtFilter,
  orderProductItemsFilter,
  orderProvinceFilter,
  orderShippingTypeFilter,
  orderStatusFilter,
  orderTotalItemsFilter,
  // orderTotalItemsFilter,
  orderTotalProductsFilter,
} from 'modules/sales/common/constants/order-filters';

export const subOrderFilters: Filter[] = [
  orderCodeFilter,
  orderEmailFilter,
  orderStatusFilter,

  orderDeliveryDueDateFilter,
  orderShippingTypeFilter,
  orderDeliverTimeTypeFilter,

  orderOfferFilter,
  orderTotalProductsFilter,
  orderPaidAtFilter,
  orderHasChargeBackFilter,

  // address
  orderProvinceFilter,
  orderMunicipalityFilter,

  // providers
  orderDistributionCenterFilter,
  orderLogisticFilter,

  orderTotalItemsFilter,
  orderProductItemsFilter,

  // other
  orderInDispatchFilter,
];

export const defaultSubOrderFilterKeys: Filter[] = [
  orderCodeFilter,
  orderEmailFilter,
  orderStatusFilter,

  orderDeliveryDueDateFilter,
  orderShippingTypeFilter,
  orderDeliverTimeTypeFilter,

  // orderOfferFilter,
  orderTotalProductsFilter,
  orderPaidAtFilter,
  orderHasChargeBackFilter,

  // address
  orderProvinceFilter,
  orderMunicipalityFilter,

  // providers
  orderDistributionCenterFilter,
  orderLogisticFilter,

  orderTotalItemsFilter,
  orderProductItemsFilter,
];
