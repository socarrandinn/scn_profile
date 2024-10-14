import { TabRouteType } from '@dfl/react-security';

export const nameTab: TabRouteType[] = [
  {
    path: '/inventory/warehouses/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  }
];
