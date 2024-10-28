import { TabRouteType } from '@dfl/react-security';

export const providerTabs: TabRouteType[] = [
  {
    path: '/security/users-providers/users',
    to: '/users',
    label: 'common:providers.users',
    translate: true,
  },
  {
    path: '/security/users-providers/users-invite',
    to: '/users-invite',
    label: 'common:providers.users-invite',
    translate: true,
  },
];
