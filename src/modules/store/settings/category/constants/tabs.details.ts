import { TabRouteType } from '@dfl/react-security';

export const categoriesTabs: TabRouteType[] = [
  {
    path: '/store/settings/categories/:id/general',
    to: '/general',
    label: 'Subcategorias',
    translate: true,
  },
  {
    path: '/store/settings/categories/:id/category',
    to: '/category',
    label: 'Productos',
    translate: true,
    disabled: true,
  },
  {
    path: '/store/settings/categories/:id/report',
    to: '/reportes',
    label: 'Reportes',
    translate: true,
    disabled: true,
  },
];
