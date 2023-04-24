import { TabRouteType } from '@dfl/react-security';

export const employeeTabs: TabRouteType[] = [
  {
    path: '/rrhh/employees/:id/general',
    to: '/general',
    label: 'tabs.general',
    translate: true,
  },
];
