import { IMenu } from '@dfl/mui-react-common';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { SupplierIcon } from 'modules/inventory/common/components/Icons/SupplierIcon';
import { LogisticIcon } from 'modules/inventory/common/components/Icons/LogisticIcon';
import { ManufactureIcon } from 'modules/inventory/common/components/Icons/ManufactureIcon';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { MANUFACTURE_PERMISSIONS } from 'modules/inventory/provider/manufacture/constants';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants';
import { CategoryIcon } from 'modules/inventory/common/components/Icons/CategoryIcon';
import { WAREHOUSE_AREA_PERMISSIONS } from 'modules/inventory/settings/warehouse-area/constants';
import { TAGS_PERMISSIONS } from 'modules/inventory/settings/tags/constants';
import { STOCK_REDUCTION_CAUSE_PERMISSIONS } from 'modules/inventory/settings/stock-reduction-cause/constants';
import { WarehouseIcon } from 'modules/inventory/common/components/Icons/WarehouseIcon';
import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';
import { WarehouseAreaIcon } from 'modules/inventory/common/components/Icons/WarehouseAreaIcon';
import { ReductionCauseIcon } from 'modules/inventory/common/components/Icons/ReductionCauseIcon';
import { TagsIcon } from 'modules/inventory/common/components/Icons/TagsIcon';
import { ProductIcon } from 'modules/inventory/common/components/Icons/ProductIcon';
import { DISTRIBUTION_CENTER_PERMISSIONS } from 'modules/inventory/distribution-centers/constants';
import { ProductFeatureIcon } from 'modules/inventory/common/components/Icons/ProductFeatureIcon';

export const INVENTORY_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.inventory.title',
    prefix: '/inventory',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.inventory.products',
        path: '/inventory/products',
        partialMatch: true,
        icon: <ProductIcon fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.inventory.warehouses',
        path: '/inventory/warehouses',
        partialMatch: true,
        icon: <WarehouseIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.inventory.distribution-centers',
        path: '/inventory/distribution-centers',
        partialMatch: true,
        icon: <DistributionCenterIcon fontSize='small' />,
        permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
      },
    ],
  },
  {
    title: 'main_menu.admin.section.general.providers',
    prefix: '/inventory/settings',
    atLessOne: true,
    items: [
      {
        title: 'supplier:list',
        path: '/inventory/settings/suppliers',
        partialMatch: true,
        icon: <SupplierIcon fontSize='small' />,
        permissions: [SUPPLIER_PERMISSIONS.SUPPLIER_VIEW],
      },
      {
        title: 'logistics:list',
        path: '/inventory/settings/logistics',
        partialMatch: true,
        icon: <LogisticIcon fontSize='small' />,
        permissions: [LOGISTICS_PERMISSIONS.LOGISTICS_VIEW],
      },
      {
        title: 'manufacture:list',
        path: '/inventory/settings/manufactures',
        partialMatch: true,
        icon: <ManufactureIcon fontSize='small' />,
        permissions: [MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW],
      },
    ],
  },

  {
    title: 'main_menu.admin.section.reports.title',
    prefix: '/inventory/reports',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.inventory.products',
        path: '/inventory/reports/products',
        partialMatch: true,
        icon: <ProductIcon fontSize='small' />,
        permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
      },
      {
        title: 'main_menu.admin.section.inventory.warehouses',
        path: '/inventory/reports/warehouses',
        partialMatch: true,
        icon: <WarehouseIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.inventory.distribution-centers',
        path: '/inventory/reports/distribution-centers',
        partialMatch: true,
        icon: <DistributionCenterIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'category:list',
        path: '/inventory/reports/settings/categories',
        partialMatch: true,
        icon: <CategoryIcon fontSize='small' />,
        permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
      },
    ],
  },

  {
    title: 'main_menu.admin.section.inventory.settings',
    prefix: '/inventory/settings',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'category:list',
        path: '/inventory/settings/categories',
        partialMatch: true,
        icon: <CategoryIcon fontSize='small' />,
        permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
      },
      {
        title: 'warehouseArea:list',
        path: '/inventory/settings/warehouse-areas',
        partialMatch: true,
        icon: <WarehouseAreaIcon fontSize='small' />,
        permissions: [WAREHOUSE_AREA_PERMISSIONS.WAREHOUSE_AREA_VIEW],
      },
      {
        title: 'tags:list',
        path: '/inventory/settings/tags',
        partialMatch: true,
        icon: <TagsIcon fontSize='small' />,
        permissions: [TAGS_PERMISSIONS.TAGS_VIEW],
      },
      {
        title: 'productFeatures:list',
        path: '/inventory/settings/product-features',
        partialMatch: true,
        icon: <ProductFeatureIcon fontSize='small' />,
        permissions: [TAGS_PERMISSIONS.TAGS_VIEW],
      },
      {
        title: 'stockReductionCause:list',
        path: '/inventory/settings/stock-reduction-causes',
        partialMatch: true,
        icon: <ReductionCauseIcon fontSize='small' />,
        permissions: [STOCK_REDUCTION_CAUSE_PERMISSIONS.STOCK_REDUCTION_CAUSE_VIEW],
      },
    ],
  },
];
