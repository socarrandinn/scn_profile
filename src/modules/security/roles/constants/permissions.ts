import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { WAREHOUSE_AREA_PERMISSIONS } from 'modules/inventory/settings/warehouse-area/constants';
import { TAGS_PERMISSIONS } from 'modules/inventory/settings/tags/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';

type PermissionsList = string[];
export const ADMIN = 'ADMIN';
export const ORDER_VIEW: PermissionsList = [
  'USER',
  'USER_VIEW',
  'ORDER_VIEW',
  'ORDER_STATUS_VIEW',
  'PRODUCT_VIEW',
  'DRIVER_VIEW',
  'CARRIER_VIEW',
  'CAR_VIEW',
];

export const ORDER_STATUS_CHANGE: PermissionsList = ['ORDER_STATUS'];

export const TAGS: PermissionsList = [TAGS_PERMISSIONS.TAGS_VIEW, TAGS_PERMISSIONS.TAGS_WRITE];

export const CLIENT_SUPPORT: PermissionsList = [
  'USER:NOTIFICATION',
  'CLIENT_VIEW',
  'SUBSCRIPTIONS',
  'SUPPORT_MESSAGES',
];

export const ORDER_ADMIN: PermissionsList = [
  'PAYMENT_SETTINGS_ADMIN',
  'ORDER_VALIDATE',
  'ORDER_STATUS_ADMIN',
  'ORDER_SETTINGS_ADMIN',
  'ORDER_SETTINGS_VIEW',
  'SHIPPING_ADMIN',
  'PAYMENT_VIEW',
  'ORDER_COMPLETE',
  'REPORT_VIEW',
  'ISSUE_ADMIN',
];

export const INVENTORY_VIEW: PermissionsList = [
  'CATEGORY_ADMIN',
  'PRODUCT_ADMIN',
  'PRODUCT_STATUS',
  'PRODUCT_VIEW',
  'PRODUCT_STOCK_VIEW',
  'PRODUCT_STOCK',
  'PRODUCT_SEO',
  ...TAGS,
];

export const PROVIDER_ADMIN: PermissionsList = [
  'ORDER_CARRIER',
  'DRIVER_ADMIN',
  'DRIVER_VIEW',
  'CARRIER_ADMIN',
  'CARRIER_VIEW',
  'CAR_ADMIN',
  'CAR_VIEW',
  'ROLE:READ',
];

export const USER_INVITE_ADMIN: PermissionsList = ['USER_INVITE_WRITE', 'USER_INVITE_VIEW', 'USER_INVITE_READ'];

export const LOGISTICS: PermissionsList = [LOGISTICS_PERMISSIONS.LOGISTICS_VIEW, LOGISTICS_PERMISSIONS.LOGISTICS_WRITE];
export const STORE: PermissionsList = [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW, WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE];
export const WAREHOUSE_AREA: PermissionsList = [
  WAREHOUSE_AREA_PERMISSIONS.WAREHOUSE_AREA_VIEW,
  WAREHOUSE_AREA_PERMISSIONS.WAREHOUSE_AREA_WRITE,
];

export const SUPER_ADMIN: PermissionsList = ['ADMIN', 'ROLE:READ', 'ROLE:ASSIGN', 'ADMIN'];

export const GROUPS = {
  ORDER_VIEW,
  ORDER_STATUS_CHANGE,
  LOGISTICS,
  STORE,
  WAREHOUSE_AREA,
  ORDER_ADMIN,
  CLIENT_SUPPORT,
  INVENTORY_VIEW,
  PROVIDER_ADMIN,
  SUPER_ADMIN,
  USER_INVITE_ADMIN,
};
