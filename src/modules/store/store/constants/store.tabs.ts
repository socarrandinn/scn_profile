import { TabRouteType } from '@dfl/react-security';
export const storeTabs: TabRouteType[] = [
  {
    path: '/store/stores/:id/users',
    to: '/users',
    label: 'users',
    translate: true,
  },
  {
    path: '/store/stores/:id/product',
    to: '/product',
    label: 'product',
    translate: true,
    permissions: ['USER_ADMIN'],
  },
];
