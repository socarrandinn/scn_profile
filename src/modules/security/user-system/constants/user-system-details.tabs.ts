import { TabRouteType } from '@dfl/react-security';

export const accountSystemTabs: TabRouteType[] = [
  {
    path: '/security/system-users/user/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/security/system-users/user/:id/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
    permissions: ['ADMIN'],
  },
];
