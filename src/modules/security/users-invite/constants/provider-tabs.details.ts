import { TabRouteType } from '@dfl/react-security';

export const providerTabs: TabRouteType[] = [
  {
    path: '/security/providers-users/users',
    to: '/users',
    label: 'common:providers.users',
    translate: true,
  },
  {
    path: '/security/providers-users/users-invite',
    to: '/users-invite',
    label: 'common:providers.users-invite',
    translate: true,
  },
];
