import { Filter } from '@dfl/mui-admin-layout';
import {
  orderCodeFilter,
  orderDeliverTimeTypeFilter,
  orderMunicipalityFilter,
  // orderOfferFilter,
  orderPaidAtFilter,
  orderProductItemsFilter,
  orderProvinceFilter,
  orderShippingTypeFilter,
  orderStatusFilter,
  orderTotalAmountFilter,
  orderTotalItemsFilter,
  orderTotalProductsFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
} from 'modules/sales/common/constants/order-filters';

export const clientOrderFilters: Filter[] = [
  orderCodeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  orderTotalProductsFilter,
  orderTotalAmountFilter,
  orderShippingTypeFilter,
  orderDeliverTimeTypeFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
  orderStatusFilter,
  orderPaidAtFilter,

  orderTotalItemsFilter,
  // orderHasPaymentFilter,
  // orderHasChargeBackFilter,
  // orderOfferFilter,
  // orderLogisticFilter,
  // orderDeliveryStatusFilter,
  orderProductItemsFilter,
];

export const defaultClientOrderFilterKeys: Filter[] = [
  orderCodeFilter,
  orderProvinceFilter,
  orderMunicipalityFilter,
  orderStatusFilter,
  orderShippingTypeFilter,
  orderTotalProductsFilter,
  orderTotalAmountFilter,
  orderDeliverTimeTypeFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
  orderPaidAtFilter,
];
