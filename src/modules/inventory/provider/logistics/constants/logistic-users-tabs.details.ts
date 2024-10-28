import { TabRouteType } from '@dfl/react-security';

export const logisticUsersTabs: TabRouteType[] = [
  {
    path: '/inventory/settings/logistics/:id/users/users',
    to: '/users',
    label: 'common:providers.users',
    translate: true,
  },
  {
    path: '/inventory/settings/logistics/:id/users/users-invite',
    to: '/users-invite',
    label: 'common:providers.users-invite',
    translate: true,
  },
];
