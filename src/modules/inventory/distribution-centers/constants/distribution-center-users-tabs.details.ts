import { TabRouteType } from '@dfl/react-security';

export const distributionCenterUsersTabs: TabRouteType[] = [
  {
    path: '/inventory/distribution-centers/:id/users/users',
    to: '/users',
    label: 'common:providers.users',
    translate: true,
  },
  {
    path: '/inventory/distribution-centers/:id/users/users-invite',
    to: '/users-invite',
    label: 'common:providers.users-invite',
    translate: true,
  },
];
