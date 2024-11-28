import { TabRouteType } from '@dfl/react-security';

export const userTypesTabs: TabRouteType[] = [
  {
    path: '/security/users/all',
    to: '/all',
    label: 'users:all',
    translate: true,
  },
  {
    path: '/security/users/active',
    to: '/active',
    label: 'users:active',
    translate: true,
  },
  {
    path: '/security/users/unverify',
    to: '/unverify',
    label: 'users:unverify',
    translate: true,
  },
  {
    path: '/security/users/lock',
    to: '/lock',
    label: 'users:lock',
    translate: true,
  },
  {
    path: '/security/users/invitation',
    to: '/invitation',
    label: 'users:invitation',
    translate: true,
  },
];
