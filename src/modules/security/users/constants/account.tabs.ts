import { TabRouteType } from '@dfl/react-security';

export const accountSystemTabs: TabRouteType[] = [
  {
    path: '/security/users/system/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/security/users/system/:id/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
    permissions: ['USER_ADMIN'],
  },
];
export const accountProviderTabs: TabRouteType[] = [
  {
    path: '/security/users/providers/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/security/users/providers/:id/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
    permissions: ['USER_ADMIN'],
  },
];
