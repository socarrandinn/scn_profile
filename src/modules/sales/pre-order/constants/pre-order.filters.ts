import { Filter } from '@dfl/mui-admin-layout';
import {
  orderCodeFilter,
  orderDeliverTimeTypeFilter,
  orderEmailFilter,
  orderMunicipalityFilter,
  // orderOfferFilter,
  orderProductItemsFilter,
  orderProvinceFilter,
  orderShippingTypeFilter,
  orderTotalAmountFilter,
  orderTotalItemsFilter,
  orderTotalProductsFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
} from 'modules/sales/common/constants/order-filters';

export const preOrderFilters: Filter[] = [
  orderCodeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  // orderStatusFilter,
  orderShippingTypeFilter,
  orderTotalProductsFilter,
  orderTotalAmountFilter,
  orderDeliverTimeTypeFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
  // orderPaidAtFilter,

  orderTotalItemsFilter,
  orderEmailFilter,
  // orderHasPaymentFilter,
  // orderHasChargeBackFilter,
  // orderOfferFilter,
  // orderLogisticFilter,
  // orderDeliveryStatusFilter,
  orderProductItemsFilter,
];

export const defaultPreOrderFilterKeys: Filter[] = [
  orderCodeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  // orderStatusFilter,
  orderShippingTypeFilter,
  orderTotalProductsFilter,
  orderTotalAmountFilter,
  orderDeliverTimeTypeFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
  // orderPaidAtFilter,
];
