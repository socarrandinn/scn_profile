import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { STORE_AREA_PERMISSIONS } from 'modules/inventory/settings/store-area/constants';
import { STORE_PERMISSIONS } from 'modules/inventory/store/constants';

type PermissionsList = string[];

export const ORDER_VIEW: PermissionsList = [
  'USER',
  'ORDER_VIEW',
  'ORDER_STATUS_VIEW',
  'PRODUCT_VIEW',
  'DRIVER_VIEW',
  'CARRIER_VIEW',
  'CAR_VIEW',
];

export const ORDER_STATUS_CHANGE: PermissionsList = ['ORDER_STATUS'];

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

export const LOGISTICS: PermissionsList = [LOGISTICS_PERMISSIONS.LOGISTICS_VIEW, LOGISTICS_PERMISSIONS.LOGISTICS_WRITE];
export const STORE: PermissionsList = [STORE_PERMISSIONS.STORE_VIEW, STORE_PERMISSIONS.STORE_WRITE];
export const STORE_AREA: PermissionsList = [
  STORE_AREA_PERMISSIONS.STORE_AREA_VIEW,
  STORE_AREA_PERMISSIONS.STORE_AREA_WRITE,
];

export const SUPER_ADMIN: PermissionsList = ['USER_ADMIN', 'ROLE:READ', 'ROLE:ASSIGN', 'ADMIN'];

export const GROUPS = {
  ORDER_VIEW,
  ORDER_STATUS_CHANGE,
  LOGISTICS,
  STORE,
  STORE_AREA,
  ORDER_ADMIN,
  CLIENT_SUPPORT,
  INVENTORY_VIEW,
  PROVIDER_ADMIN,
  SUPER_ADMIN,
};
