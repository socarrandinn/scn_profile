import { TabRouteType } from '@dfl/react-security';

export const userTabs: TabRouteType[] = [
  {
    path: '/security/users',
    to: '/system',
    label: 'common:roles',
    translate: true,
  },
  {
    path: '/security/users/providers',
    to: '/providers',
    label: 'common:rolesList',
    translate: true,
  },
];
