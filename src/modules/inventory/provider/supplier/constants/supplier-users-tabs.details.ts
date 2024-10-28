import { TabRouteType } from '@dfl/react-security';

export const supplierUsersTabs: TabRouteType[] = [
  {
    path: '/inventory/settings/suppliers/:id/users/users',
    to: '/users',
    label: 'common:providers.users',
    translate: true,
  },
  {
    path: '/inventory/settings/suppliers/:id/users/users-invite',
    to: '/users-invite',
    label: 'common:providers.users-invite',
    translate: true,
  },
];
