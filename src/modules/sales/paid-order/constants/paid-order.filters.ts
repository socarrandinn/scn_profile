import { Filter } from '@dfl/mui-admin-layout';
import {
  orderCodeFilter,
  orderEmailFilter,
  orderStatusFilter,
  orderDeliverTimeTypeFilter,
  // orderDeliveryStatusFilter,
  orderHasPaymentFilter,
  orderMunicipalityFilter,
  // orderOfferFilter,
  orderPaidAtFilter,
  orderProductItemsFilter,
  orderProvinceFilter,
  orderShippingTypeFilter,
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
  orderProductItemsFilter,

  orderShippingTypeFilter,
  orderDeliverTimeTypeFilter,
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
