import { TabRouteType } from '@dfl/react-security';

export const accountSystemTabs: TabRouteType[] = [
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
    permissions: ['ADMIN'],
  },
];
export const accountProviderTabs: TabRouteType[] = [
  {
    path: '/security/providers-users/users/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/security/providers-users/users/:id/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
    permissions: ['ADMIN'],
  },
];
