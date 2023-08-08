import { TabRouteType } from '@dfl/react-security';
export const storeTabs: TabRouteType[] = [
  {
    path: '/inventory/stores/:id/users',
    to: '/users',
    label: 'users',
    translate: true,
  },
  {
    path: '/inventory/stores/:id/product',
    to: '/product',
    label: 'product',
    translate: true,
    permissions: ['USER_ADMIN'],
  },
];
