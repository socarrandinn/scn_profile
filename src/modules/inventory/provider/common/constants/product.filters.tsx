import { Filter, FilterType, FilterValue } from '@dfl/mui-admin-layout';
import { EmptyFilter, InFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { CategoryFilter } from 'modules/inventory/product/components/CategoryFilter';

export const productsFilters: Filter[] = [
  {
    filter: 'product:product.form.code.placeholder',
    translate: true,
    type: FilterType.TEXT,
    key: 'cd',
    field: 'code',
    transform: (value) => {
      return new OperatorFilter({
        type: 'OR',
        filters: [
          new TermFilter({ field: 'code', value }),
          new TermFilter({ field: 'codeProductProvider', value }),
          new TermFilter({ field: 'codeLogisticProvider', value }),
        ],
      }).toQuery();
    },
  },
  {
    filter: 'product:shipping.title',
    translate: true,
    type: FilterType.FIXED_LIST,
    key: 'shipping.free',
    field: 'shipping',
    transform: (value) => {
      if (Array.isArray(value)) return new EmptyFilter();
      switch (value) {
        case 'false':
          return new OperatorFilter({
            type: 'OR',
            filters: [
              new TermFilter({ field: 'shipping.free', value: false }),
              new TermFilter({ field: 'shipping.free', value: null }),
            ],
          }).toQuery();
        case 'true':
          return new TermFilter({ field: 'shipping.free', value: true }).toQuery();
      }
    },
    options: [
      {
        value: 'true',
        translate: true,
        label: 'product:shipping.free',
      },
      {
        value: 'false',
        translate: true,
        label: 'product:shipping.noFree',
      },
    ],
  },

  {
    filter: 'product:offers.title',
    translate: true,
    type: FilterType.FIXED_LIST,
    key: 'offer',
    field: 'offer.enabled',
    transform: (value) => {
      if (Array.isArray(value)) return new EmptyFilter();
      switch (value) {
        case 'false':
          return new OperatorFilter({
            type: 'OR',
            filters: [
              new TermFilter({ field: 'offer.enabled', value: false }),
              new TermFilter({ field: 'offer.enabled', value: null }),
            ],
          }).toQuery();
        case 'true':
          return new TermFilter({ field: 'offer.enabled', value: true }).toQuery();
      }
    },
    options: [
      {
        value: 'true',
        translate: true,
        label: 'product:offers.free',
      },
      {
        value: 'false',
        translate: true,
        label: 'product:offers.noFree',
      },
    ],
  },
  {
    filter: 'product:product.form.costPrice.placeholder',
    translate: true,
    type: FilterType.NUMBER,
    key: 'cost',
    field: 'costPrice',
  },
  {
    filter: 'product:product.form.price.placeholder',
    translate: true,
    type: FilterType.NUMBER,
    key: 'fp',
    field: 'finalPrice',
  },
  {
    filter: 'product:product.form.category.placeholder',
    translate: true,
    type: FilterType.FIXED_LIST,
    key: 'cat',
    field: 'categoryPath',
    transform: (value: FilterValue) => {
      return new InFilter({
        field: 'categoryPath',
        objectId: true,
        value: Array.isArray(value) ? value : [value],
        type: 'IN',
      });
    },
    Component: CategoryFilter,
  },
  {
    filter: 'common:createdAt',
    translate: true,
    type: FilterType.DATE,
    key: 'createdAt',
    field: 'createdAt',
  },
  /* {
    filter: 'order:productProvider',
    translate: true,
    type: FilterType.FIXED_LIST,
    Component: OrderProductsProviderFilter,
    key: 'product',
    field: 'productProvider',
    transform: (value) => {
      if (Array.isArray(value)) {
        return new OperatorFilter({
          type: 'OR',
          filters: value?.map((e) => new TermFilter({ field: 'productProvider', value: e, objectId: true })),
        });
      }
      return new TermFilter({ field: 'productProvider', value, objectId: true });
    },
  }, */
  /* {
    filter: 'order:logisticProvider',
    translate: true,
    type: FilterType.FIXED_LIST,
    Component: OrderLogisticsProviderFilter,
    key: 'logistic',
    field: 'warehouse.logistic',
    transform: (value) => {
      if (Array.isArray(value)) {
        return new OperatorFilter({
          type: 'OR',
          filters: value?.map((e) => new TermFilter({ field: 'warehouse.logistic', value: e, objectId: true })),
        });
      }
      return new TermFilter({ field: 'warehouse.logistic', value, objectId: true });
    },
  }, */
  /* {
    filter: 'providerProduct:store',
    translate: true,
    type: FilterType.FIXED_LIST,
    Component: ProductsStoreFilter,
    key: 'store',
    field: 'stores.store',
    transform: (value) => {
      if (Array.isArray(value)) {
        return new OperatorFilter({
          type: 'OR',
          filters: value?.map((e) => new TermFilter({ field: 'stores.store', value: e, objectId: true })),
        });
      }
      return new TermFilter({ field: 'stores.store', value, objectId: true });
    },
  }, */
];
