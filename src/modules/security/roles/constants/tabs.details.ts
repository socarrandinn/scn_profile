import { TabRouteType } from '@dfl/react-security';

export const rolesTabs: TabRouteType[] = [
  {
    path: '/security/roles/system',
    to: '/system',
    label: 'common:roles',
    translate: true,
  },
  {
    path: '/security/roles/providers',
    to: '/providers',
    label: 'common:rolesList',
    translate: true,
  },
];
