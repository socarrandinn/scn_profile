import { TabRouteType } from '@dfl/react-security';

export const dispatchDetailTabs: TabRouteType[] = [
  {
    path: '/sales/dispatches/:id/orders',
    to: '/orders',
    label: 'dispatch:tabs.orders',
    translate: true,
  },
  {
    path: '/sales/dispatches/:id/products',
    to: '/products',
    label: 'dispatch:tabs.products',
    translate: true,
  },
  {
    path: '/sales/dispatches/:id/warehouses',
    to: '/warehouses',
    label: 'dispatch:tabs.warehouses',
    translate: true,
  },
];
