import { TabRouteType } from '@dfl/react-security';

export const accountTabs: TabRouteType[] = [
  {
    path: '/account/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/account/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
  },
];
