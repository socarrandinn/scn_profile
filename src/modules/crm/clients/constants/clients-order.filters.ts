import { Filter } from '@dfl/mui-admin-layout';
import {
  orderCodeFilter,
  orderHasChargeBackFilter,
  orderHasPaymentFilter,
  orderMunicipalityFilter,
  orderOfferFilter,
  // orderOfferFilter,
  orderPaidAtFilter,
  orderProductItemsFilter,
  orderProvinceFilter,
  orderStatusFilter,
  orderTotalAmountFilter,
  orderTotalItemsFilter,
  orderTotalProductsFilter,
  paymentGatewayFilter,
  paymentMethodFilter,
} from 'modules/sales/common/constants/order-filters';

export const clientOrderFilters: Filter[] = [
  orderCodeFilter,
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
];

export const defaultClientOrderFilterKeys: Filter[] = [
  orderCodeFilter,
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
