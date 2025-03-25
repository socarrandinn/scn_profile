import { Filter } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
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
  createdATFilter,
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
