import { TabRouteType } from '@dfl/react-security';

export const employeeTabs: TabRouteType[] = [
  {
    path: '/rrhh/employees/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
  {
    path: '/rrhh/employees/:id/address',
    to: '/address',
    label: 'tabs.address',
    translate: true,
  },
  {
    path: '/rrhh/employees/:id/contacts',
    to: '/contacts',
    label: 'tabs.contacts',
    translate: true,
  },
];
