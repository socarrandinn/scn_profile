import { TabRouteType } from '@dfl/react-security';

export const accountTabs: TabRouteType[] = [
  {
    path: '/security/users/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/security/users/:id/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
    permissions: ['USER_ADMIN'],
  },
];
