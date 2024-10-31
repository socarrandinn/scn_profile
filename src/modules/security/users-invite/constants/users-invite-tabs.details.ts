import { TabRouteType } from '@dfl/react-security';

export const commonUserInviteTabs = (path: string = 'inventory/providers-users'): TabRouteType[] => [
  {
    path: `/${path}/:id/users/users`,
    to: '/users',
    label: 'common:providers.users',
    translate: true,
  },
  {
    path: `/${path}/:id/users/users-invite`,
    to: '/users-invite',
    label: 'common:providers.users-invite',
    translate: true,
  },
];
