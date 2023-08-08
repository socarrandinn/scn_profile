import { TabRouteType } from '@dfl/react-security';

export const categoriesTabs: TabRouteType[] = [
  {
    path: '/inventory/settings/categories/:id/general',
    to: '/general',
    label: 'Subcategorias',
    translate: true,
  },
  {
    path: '/inventory/settings/categories/:id/category',
    to: '/category',
    label: 'Productos',
    translate: true,
    disabled: true,
  },
  {
    path: '/inventory/settings/categories/:id/report',
    to: '/reportes',
    label: 'Reportes',
    translate: true,
    disabled: true,
  },
];
