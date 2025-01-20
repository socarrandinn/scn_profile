import { TabRouteType } from '@dfl/react-security';

export const userDetailsTabs: TabRouteType[] = [
  {
    path: '/security/users/user/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/security/users/user/:id/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
    permissions: ['ADMIN'],
  },
];
