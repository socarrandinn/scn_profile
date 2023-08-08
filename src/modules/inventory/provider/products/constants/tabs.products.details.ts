import { TabRouteType } from '@dfl/react-security';

export const provedorProductTabs: TabRouteType[] = [
  {
    path: '/provider/products/:id/general',
    to: '/products',
    label: 'Usuarios',
    translate: true,
  },
  {
    path: '/provider/products/:id/product',
    to: '/product',
    label: 'Product',
    translate: true,
  },
];
