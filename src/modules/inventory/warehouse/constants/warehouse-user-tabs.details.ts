import { TabRouteType } from '@dfl/react-security';

export const warehouseUserTabs: TabRouteType[] = [
  {
    path: '/inventory/warehouses/:id/users/system-users/*',
    to: '/system-users',
    label: 'common:roles',
    translate: true,
  },
  {
    path: '/inventory/warehouses/:id/users/providers-users/*',
    to: '/providers-users',
    label: 'common:rolesList',
    translate: true,
  },
];
