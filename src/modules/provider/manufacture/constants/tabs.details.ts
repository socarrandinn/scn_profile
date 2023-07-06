import { TabRouteType } from '@dfl/react-security';

export const manufactireTabs: TabRouteType[] = [
  {
    path: '/provider/manufactures/:id/general',
    to: '/provider/manufactures',
    label: 'Usuarios',
    translate: true,
  },
  {
    path: '/provider/manufactures/:id/product',
    to: '/provider/manufactures',
    label: 'Product',
    translate: true,
  },
];
