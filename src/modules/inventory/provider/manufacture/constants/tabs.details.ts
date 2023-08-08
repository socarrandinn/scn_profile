import { TabRouteType } from '@dfl/react-security';

export const manufactureTabs: TabRouteType[] = [
  {
    path: '/provider/manufactures/:id/general',
    to: '/general',
    label: 'Usuarios',
    translate: true,
  },
  {
    path: '/provider/manufactures/:id/product',
    to: '/product',
    label: 'Product',
    translate: true,
  },
];
