import { TabRouteType } from '@dfl/react-security';

export const logisticsTabs: TabRouteType[] = [
  {
    path: '/provider/logistics/:id/general',
    to: '/general',
    label: 'Usuarios',
    translate: true,
  },
  {
    path: '/provider/logistics/:id/product',
    to: '/product',
    label: 'Product',
    translate: true,
  },
];
