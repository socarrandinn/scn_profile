import { TabRouteType } from '@dfl/react-security';

export const accountTabs: TabRouteType[] = [
  {
    path: '/user/me/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/user/me/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
    permissions: ['USER_ADMIN'],
  },
];
