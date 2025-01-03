import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants';
import { WAREHOUSE_AREA_PERMISSIONS } from 'modules/inventory/settings/warehouse-area/constants';
import {
  CATEGORIES,
  INVENTORY_PRODUCT_FEATURE,
  INVENTORY_TAGS,
  STOCK_REDUCTION_CAUSE,
  WAREHOUSE_AREA,
} from 'modules/inventory/constants/entities.style';
import { TAGS_PERMISSIONS } from '../../tags/constants';
import { STOCK_REDUCTION_CAUSE_PERMISSIONS } from '../../stock-reduction-cause/constants';
import { PRODUCT_FEATURE_PERMISSIONS } from '../../product-features/constants';

export const storeSettingsMenu: IMenuItemPage[] = [
  {
    title: 'category:list',
    description: 'category:description',
    path: '/inventory/settings/categories',
    icon: CATEGORIES.ICON,
    color: CATEGORIES.COLOR,
    permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
  {
    title: 'warehouseArea:list',
    description: 'warehouseArea:description',
    path: '/inventory/settings/warehouse-areas',
    icon: WAREHOUSE_AREA.ICON,
    permissions: [WAREHOUSE_AREA_PERMISSIONS.WAREHOUSE_AREA_VIEW],
    color: WAREHOUSE_AREA.COLOR,
  },
  {
    title: 'tags:list',
    description: 'tags:description',
    path: '/inventory/settings/tags',
    icon: INVENTORY_TAGS.ICON,
    permissions: [TAGS_PERMISSIONS.TAGS_VIEW],
    color: INVENTORY_TAGS.COLOR,
  },
  {
    title: 'productFeatures:list',
    description: 'productFeatures:description',
    path: '/inventory/settings/product-features',
    icon: INVENTORY_PRODUCT_FEATURE.ICON,
    permissions: [PRODUCT_FEATURE_PERMISSIONS.VIEW],
    color: INVENTORY_PRODUCT_FEATURE.COLOR,
  },
  {
    title: 'stockReductionCause:list',
    description: 'stockReductionCause:description',
    path: '/inventory/settings/stock-reduction-causes',
    icon: STOCK_REDUCTION_CAUSE.ICON,
    permissions: [STOCK_REDUCTION_CAUSE_PERMISSIONS.STOCK_REDUCTION_CAUSE_VIEW],
    color: STOCK_REDUCTION_CAUSE.COLOR,
  },
];
