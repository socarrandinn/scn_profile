import { TabRouteType } from '@dfl/react-security';

export const accountProviderTabs: TabRouteType[] = [
  {
    path: '/security/providers-users/user/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/security/providers-users/user/:id/security',
    to: '/security',
    label: 'tabs.security',
    translate: true,
    permissions: ['ADMIN'],
  },
];
