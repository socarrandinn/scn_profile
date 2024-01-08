import { TabRouteType } from '@dfl/react-security';

export const nameTab: TabRouteType[] = [
  {
    path: '/inventory/stores/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  }
];
