import { Filter, FilterType, FilterValue } from '@dfl/mui-admin-layout';
import { EmptyFilter, ExistFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { OrderPaymentGatewayFilter } from '../components/OrderPaymentGatewayFilter';
import { ORDER_STATUSES_LIST_KEY } from 'modules/sales/settings/order-status/constants';
import { OrderStatusService } from 'modules/sales/settings/order-status/services';
import { DELIVERY_TIME_TYPE_ENUM, SHIPPING_TYPE_ENUM } from './order-delivery.enum';
import { deliveryMaxTimeFilterTransform } from 'modules/sales/utils/order-delivery-max-time-transforms';
import { getOfferCouponFilter, OFFER_COUPON_VALUES } from './order-ofert.filters';
import { getMunicipalityFilterByField, getProvincesFilterByField } from 'modules/common/constants';
import { ProductService } from 'modules/inventory/product/services';

export const paymentGatewayFilter: Filter = {
  filter: 'order:billing.gateway',
  translate: true,
  type: FilterType.FIXED_LIST,
  Component: OrderPaymentGatewayFilter,
  key: 'gateway',
  field: 'billing.gateway',
  transform: (value) => {
    if (Array.isArray(value)) {
      return new OperatorFilter({
        type: 'OR',
        filters: value?.map((e) => new TermFilter({ field: 'billing.gateway', value: e })),
      });
    }
    return new TermFilter({ field: 'billing.gateway', value });
  },
};

export const orderCodeFilter: Filter = {
  filter: 'order:code',
  translate: true,
  field: 'code',
  key: 'code',
  placeholder: 'TAB',
  type: FilterType.TEXT,
};

export const orderStatusFilter: Filter = {
  filter: 'order:status.title',
  translate: true,
  key: 'st',
  field: 'status',
  labelKey: 'title',
  queryKey: ORDER_STATUSES_LIST_KEY,
  type: FilterType.DYNAMIC_LIST,
  fetchFunc: OrderStatusService.search,
  // @ts-ignore
  fetchOption: { sort: { order: 'asc' } },
  transform: (value) => {
    if (Array.isArray(value)) {
      return new OperatorFilter({
        type: 'OR',
        filters: value?.map((e) => new TermFilter({ field: 'status', value: e, objectId: true })),
      });
    }
    return new TermFilter({ field: 'status', value, objectId: true });
  },
};

export const orderDeliverTimeTypeFilter: Filter = {
  filter: 'order:shipping.deliveryTimeType.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'deliveryTimeType',
  field: 'shipping.deliveryTimeType',
  options: [
    {
      value: DELIVERY_TIME_TYPE_ENUM.TIME,
      translate: true,
      label: `order:shipping.deliveryTimeType.${DELIVERY_TIME_TYPE_ENUM.TIME}`,
    },
    {
      value: DELIVERY_TIME_TYPE_ENUM.RISK,
      translate: true,
      label: `order:shipping.deliveryTimeType.${DELIVERY_TIME_TYPE_ENUM.RISK}`,
    },
    {
      value: DELIVERY_TIME_TYPE_ENUM.LATE,
      translate: true,
      label: `order:shipping.deliveryTimeType.${DELIVERY_TIME_TYPE_ENUM.LATE}`,
    },
    {
      value: DELIVERY_TIME_TYPE_ENUM.SEVERE,
      translate: true,
      label: `order:shipping.deliveryTimeType.${DELIVERY_TIME_TYPE_ENUM.SEVERE}`,
    },
    {
      value: DELIVERY_TIME_TYPE_ENUM.CRITICS,
      translate: true,
      label: `order:shipping.deliveryTimeType.${DELIVERY_TIME_TYPE_ENUM.CRITICS}`,
    },
  ],
  transform: (value: DELIVERY_TIME_TYPE_ENUM) =>
    deliveryMaxTimeFilterTransform({ field: 'shipping.deliveryTimeType', value }),
};

export const orderShippingTypeFilter: Filter = {
  filter: 'order:shipping.shippingType.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'shippingType',
  field: 'shipping.shippingType',
  options: [
    {
      value: SHIPPING_TYPE_ENUM.DEFAULT,
      translate: true,
      label: `order:shipping.shippingType.${SHIPPING_TYPE_ENUM.DEFAULT}`,
    },
    {
      value: SHIPPING_TYPE_ENUM.EXPRESS,
      translate: true,
      label: `order:shipping.shippingType.${SHIPPING_TYPE_ENUM.EXPRESS}`,
    },
  ],
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case SHIPPING_TYPE_ENUM.DEFAULT:
        return new OperatorFilter({
          type: 'OR',
          filters: [
            new ExistFilter({ field: 'shipping.shippingType', value: false }),
            new TermFilter({ field: 'shipping.shippingType', value }),
          ],
        });
      case SHIPPING_TYPE_ENUM.EXPRESS:
        return new TermFilter({ field: 'shipping.shippingType', value });
      default:
        return new EmptyFilter();
    }
  },
};

export const orderOfferFilter: Filter = {
  filter: 'order:offer.label',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'offer',
  field: 'offer',
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
      label: 'order:offer.active',
    },
    {
      value: OFFER_COUPON_VALUES.OFFER_FALSE,
      translate: true,
      label: 'order:offer.inactive',
    },
    {
      value: OFFER_COUPON_VALUES.COUPON_TRUE,
      translate: true,
      label: 'order:coupon.active',
    },
    {
      value: OFFER_COUPON_VALUES.COUPON_FALSE,
      translate: true,
      label: 'order:coupon.inactive',
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

export const orderChargeBackDateFilter: Filter = {
  filter: 'order:billing.chargeBackDate',
  translate: true,
  type: FilterType.DATE,
  key: 'chargeBackDate',
  field: 'billing.chargeBackDate',
};

export const orderProvinceFilter: Filter = getProvincesFilterByField('shipping.address.state');
export const orderMunicipalityFilter: Filter = getMunicipalityFilterByField('shipping.address.city');
export const orderAmountFilter: Filter = {
  filter: 'order:amount',
  translate: true,
  type: FilterType.NUMBER,
  key: 'total',
  field: 'amount.total',
};

export const orderProductItemsFilter: Filter = {
  filter: 'common:products',
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
        new TermFilter({ field: 'shipping.email', value }),
        new TermFilter({ field: 'billingInfo.email', value }),
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

export const orderFilter: Filter[] = [
  orderCodeFilter,
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
  // orderQuantityFilter,
  // orderAmountFilter,
  // orderOfferFilter
  // orderProductItemsFilter
  // orderEmailFilter
  // orderInformationFilter
];
