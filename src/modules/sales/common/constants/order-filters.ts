import { Filter, FilterType, FilterValue } from '@dfl/mui-admin-layout';
import { EmptyFilter, ExistFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';

import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';
import {
  DELIVERY_MAX_TIME_ENUM,
  DELIVERY_STATUS_ENUM,
  DELIVERY_TIME_TYPE_ENUM,
  SHIPPING_TYPE_ENUM,
} from './order.enum';
import { getOfferCouponFilter, OFFER_COUPON_VALUES } from './order-offer.filters';
import { getMunicipalityFilterByField, getProvincesFilterByField } from 'modules/common/constants';
import { ProductService } from 'modules/inventory/product/services';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { deliveryMaxTimeFilterTransform } from '../utils/order-delivery-max-time-transforms';
import { transformWhitObjectId } from 'modules/common/constants/object-id';

import { PAYMENT_GATEWAYS_ENUM, PAYMENT_METHOD_ENUM } from './order-payments';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_LIST_KEY } from 'modules/inventory/distribution-centers/constants';

export const paymentMethodFilter: Filter = {
  filter: 'order:payment.method.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'paymentMethod',
  field: 'payment.paymentMethod',
  options: Object.keys(PAYMENT_METHOD_ENUM)?.map((gateway) => ({
    value: gateway,
    translate: true,
    label: `order:payment.method:${gateway}`,
  })),
};

export const paymentGatewayFilter: Filter = {
  filter: 'order:payment.gateway.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'gateway',
  field: 'payment.gateway',
  options: Object.values(PAYMENT_GATEWAYS_ENUM)?.map((gateway) => ({
    value: gateway,
    translate: true,
    label: `order:payment.gateway:${gateway}`,
  })),
};

export const orderCodeFilter: Filter = {
  filter: 'order:code',
  translate: true,
  field: 'code',
  key: 'code',
  placeholder: 'COD',
  type: FilterType.TEXT,
};

export const orderStatusFilter: Filter = {
  filter: 'order:status.title',
  translate: true,
  key: 'st',
  field: 'status.type',
  labelKey: 'title',
  type: FilterType.FIXED_LIST,
  options: Object.keys(ORDER_STATUS_TYPE_ENUM)?.map((status) => ({
    value: status,
    translate: true,
    label: `orderStatus:fields.orderStatusType.${status}`,
  })),
};

export const orderDeliverTimeTypeFilter: Filter = {
  filter: 'order:shipping.deliveryTimeType.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'deliveryTimeType',
  field: 'shipping.deliveryTimeType',
  options: Object.keys(DELIVERY_TIME_TYPE_ENUM)?.map((delivery) => ({
    value: delivery,
    translate: true,
    label: `order:shipping.deliveryTimeType.${delivery}.title`,
  })),
};

export const orderShippingTypeFilter: Filter = {
  filter: 'order:shipping.shippingType.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'shippingType',
  field: 'shipping.shippingType',
  options: [
    {
      value: SHIPPING_TYPE_ENUM.HOME_DELIVERY,
      translate: true,
      label: `order:shipping.shippingType.${SHIPPING_TYPE_ENUM.HOME_DELIVERY}`,
    },
    {
      value: SHIPPING_TYPE_ENUM.STORE_PICKUP,
      translate: true,
      label: `order:shipping.shippingType.${SHIPPING_TYPE_ENUM.STORE_PICKUP}`,
    },
  ],
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case SHIPPING_TYPE_ENUM.HOME_DELIVERY:
        return new OperatorFilter({
          type: 'OR',
          filters: [
            new ExistFilter({ field: 'shipping.shippingType', value: false }),
            new TermFilter({ field: 'shipping.shippingType', value }),
          ],
        });
      case SHIPPING_TYPE_ENUM.STORE_PICKUP:
        return new TermFilter({ field: 'shipping.shippingType', value });
      default:
        return new EmptyFilter();
    }
  },
};

export const orderOfferFilter: Filter = {
  filter: 'order:offers.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'offers',
  field: 'offers',
  transform: (value: FilterValue) => {
    const opt = Array.isArray(value) ? value : [value];
    if (opt) {
      return new OperatorFilter({
        type: 'OR',
        filters: opt?.map((value) => getOfferCouponFilter(value as OFFER_COUPON_VALUES)),
      });
    }
    return new EmptyFilter();
  },

  options: [
    {
      value: OFFER_COUPON_VALUES.OFFER_TRUE,
      translate: true,
      label: 'order:offers.active',
    },
    {
      value: OFFER_COUPON_VALUES.OFFER_FALSE,
      translate: true,
      label: 'order:offers.inActive',
    },
    {
      value: OFFER_COUPON_VALUES.COUPON_TRUE,
      translate: true,
      label: 'order:offers.coupon',
    },
    {
      value: OFFER_COUPON_VALUES.COUPON_FALSE,
      translate: true,
      label: 'order:offers.notCoupon',
    },
  ],
};

export const orderQuantityFilter: Filter = {
  filter: 'order:quantity',
  translate: true,
  type: FilterType.NUMBER,
  key: 'items',
  field: 'totalProducts',
};

export const orderPaymentDateFilter: Filter = {
  filter: 'order:billing:paymentDate',
  translate: true,
  type: FilterType.DATE,
  key: 'paymentDate',
  field: 'billing.paymentDate',
};

export const orderDeliveryEstimatedDateFilter: Filter = {
  filter: 'order:shipping:deliveryEstimatedDate',
  translate: true,
  type: FilterType.DATE,
  key: 'destinationDate',
  field: 'shipping.deliveryEstimatedDate',
};
export const orderDeliveryTimeRangeFilter: Filter = {
  filter: 'order:shipping.deliveryTimeRange',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'deliveryMax',
  field: 'deliveryMaxTime',
  options: [
    {
      value: DELIVERY_MAX_TIME_ENUM.TIME,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.TIME',
    },
    {
      value: DELIVERY_MAX_TIME_ENUM.RISK,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.RISK',
    },
    {
      value: DELIVERY_MAX_TIME_ENUM.LATE,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.LATE',
    },
    {
      value: DELIVERY_MAX_TIME_ENUM.SEVERE,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.SEVERE',
    },
    {
      value: DELIVERY_MAX_TIME_ENUM.CRITICS,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.CRITICS',
    },
  ],
  transform: deliveryMaxTimeFilterTransform,
};

export const orderChargeBackDateFilter: Filter = {
  filter: 'order:billing.chargeBackDate',
  translate: true,
  type: FilterType.DATE,
  key: 'chargeBackDate',
  field: 'billing.chargeBackDate',
};

export const orderProvinceFilter: Filter = getProvincesFilterByField('shipping.address.state');
export const orderMunicipalityFilter: Filter = getMunicipalityFilterByField('shipping.address.city');

export const orderProductItemsFilter: Filter = {
  filter: 'order:items.products',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'items.product',
  field: 'items.product',
  fetchFunc: ProductService.search,
  mapEntities: (item: any[]) => {
    const finalProductMapper: any[] = [];
    item.map((item: any) =>
      finalProductMapper.push({
        value: item._id,
        label: item.name.length > 20 ? String(item.name).substring(0, 40) + '...' : item.name,
        item,
      }),
    );
    return finalProductMapper;
  },
  transform: (value) => {
    if (Array.isArray(value)) {
      return new OperatorFilter({
        type: 'OR',
        filters: value?.map(
          (e) =>
            new OperatorFilter({
              type: 'OR',
              filters: [
                new TermFilter({ field: 'items.product', value: e, objectId: true }),
                new TermFilter({
                  field: 'items.productSnapShot.variantOf',
                  value: e,
                  objectId: true,
                }),
              ],
            }),
        ),
      });
    }
    return new OperatorFilter({
      type: 'OR',
      filters: [
        new TermFilter({ field: 'items.product', value, objectId: true }),
        new TermFilter({ field: 'items.productSnapShot.variantOf', value, objectId: true }),
      ],
    });
  },
};

export const orderHasPaymentFilter: Filter = {
  filter: 'order:billing.hasPayment',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'hasPayment',
  field: 'billing.hasPayment',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'true':
        return new TermFilter({ field: 'billing.hasPayment', value: { $exists: true } }).toQuery();
      case 'false':
        return new TermFilter({ field: 'billing.hasPayment', value: { $exists: false } }).toQuery();
    }
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'order:hasPayment.true',
    },
    {
      value: 'false',
      translate: true,
      label: 'order:hasPayment.false',
    },
  ],
};

export const orderHasChargeBackFilter: Filter = {
  filter: 'order:billing.hasChargeBack',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'hasChargeBack',
  field: 'billing.hasChargeBack',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'true':
        return new TermFilter({ field: 'billing.hasChargeBack', value: { $exists: true } }).toQuery();
      case 'false':
        return new TermFilter({ field: 'billing.hasChargeBack', value: { $exists: false } }).toQuery();
    }
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'order:hasChargeBack.true',
    },
    {
      value: 'false',
      translate: true,
      label: 'order:hasChargeBack.false',
    },
  ],
};

export const orderEmailFilter: Filter = {
  filter: 'email',
  translate: true,
  field: 'email',
  key: 'email',
  type: FilterType.TEXT,
  transform: (value) => {
    return new OperatorFilter({
      type: 'OR',
      filters: [
        new TermFilter({ field: 'shipping.person.email', value }),
        new TermFilter({ field: 'billing.billingClient.email', value }),
      ],
    });
  },
};

export const orderInformationFilter: Filter = {
  filter: 'order:information.label',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'paymentStatus',
  field: 'payment.information.fraudCatName',
  options: [
    {
      value: 'FRAUD',
      translate: true,
      label: 'order:information.FRAUD',
    },
    {
      value: 'SUSPICIOUS',
      translate: true,
      label: 'order:information.SUSPICIOUS',
    },
    {
      value: 'NO_FRAUD',
      translate: true,
      label: 'order:information.NO_FRAUD',
    },
  ],
};

export const orderTotalItemsFilter: Filter = {
  filter: 'order:totalItems',
  field: 'totalItems',
  translate: true,
  type: FilterType.NUMBER,
  key: 'i_count',
};
export const orderTotalProductsFilter: Filter = {
  filter: 'order:totalProducts',
  field: 'totalProducts',
  translate: true,
  type: FilterType.NUMBER,
  key: 'p_count',
};

export const orderTotalAmountFilter: Filter = {
  filter: 'order:invoice.total',
  field: 'invoice.total',
  translate: true,
  type: FilterType.NUMBER,
  key: 'total',
};

export const orderDeliveryMaxTimeFilter: Filter = {
  filter: 'order:shipping.deliveryMaxTime.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'deliveryMaxTime',
  field: 'shipping.deliveryMaxTime',
  options: [
    {
      value: DELIVERY_MAX_TIME_ENUM.TIME,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.TIME',
    },
    {
      value: DELIVERY_MAX_TIME_ENUM.RISK,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.RISK',
    },
    {
      value: DELIVERY_MAX_TIME_ENUM.LATE,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.LATE',
    },
    {
      value: DELIVERY_MAX_TIME_ENUM.SEVERE,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.SEVERE',
    },
    {
      value: DELIVERY_MAX_TIME_ENUM.CRITICS,
      translate: true,
      label: 'order:shipping.deliveryMaxTime.CRITICS',
    },
  ],
  transform: (value) => deliveryMaxTimeFilterTransform({ value, field: 'deliveryMaxTime' }),
};

export const orderLogisticFilter: Filter = {
  filter: 'order:logisticProvider',
  translate: true,
  key: 'logistic',
  field: 'items.logistic',
  queryKey: LOGISTICS_LIST_KEY,
  type: FilterType.DYNAMIC_LIST,
  fetchFunc: LogisticsService.search,
  mapEntities: (item: any[]) => {
    return item.map((a) => ({
      value: a._id,
      label: a.name,
    }));
  },
  transform: (value) => transformWhitObjectId(value, 'items.logistic'),
};

export const orderDistributionCenterFilter: Filter = {
  filter: 'distributionCenters:name',
  translate: true,
  key: 'dc',
  field: 'distributionCenter._id',
  queryKey: DISTRIBUTION_CENTERS_LIST_KEY,
  type: FilterType.DYNAMIC_LIST,
  fetchFunc: DistributionCentersService.search,
  transform: (value) => transformWhitObjectId(value, 'distributionCenter._id'),
};

export const orderDeliveryStatusFilter: Filter = {
  filter: 'order:shipping.deliveryStatus.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'dStatus',
  field: 'shipping.deliveryStatus',

  options: [
    {
      value: DELIVERY_STATUS_ENUM.ON_TIME,
      translate: true,
      label: `order:shipping.deliveryStatus.${DELIVERY_STATUS_ENUM.ON_TIME}`,
    },
    {
      value: DELIVERY_STATUS_ENUM.AT_RISK,
      translate: true,
      label: `order:shipping.deliveryStatus.${DELIVERY_STATUS_ENUM.AT_RISK}`,
    },
    {
      value: DELIVERY_STATUS_ENUM.DELAYED,
      translate: true,
      label: `order:shipping.deliveryStatus.${DELIVERY_STATUS_ENUM.DELAYED}`,
    },
    {
      value: DELIVERY_STATUS_ENUM.SEVERELY_DELAYED,
      translate: true,
      label: `order:shipping.deliveryStatus.${DELIVERY_STATUS_ENUM.SEVERELY_DELAYED}`,
    },
  ],
};

export const orderInDispatchFilter: Filter = {
  filter: 'dispatch:inDispatch',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'dispatch',
  field: 'dispatch',
  options: [
    {
      value: 'IN_DISPATCH',
      translate: true,
      label: 'dispatch:inDispatch',
    },
    {
      value: 'NO_DISPATCH',
      translate: true,
      label: 'dispatch:noDispatch',
    },
  ],
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'IN_DISPATCH':
        return new OperatorFilter({
          type: 'OR',
          filters: [new ExistFilter({ field: 'dispatch', value: true })],
        });
      case 'NO_DISPATCH':
        return new TermFilter({ field: 'dispatch', value: null, objectId: true });
      default:
        return new EmptyFilter();
    }
  },
};
