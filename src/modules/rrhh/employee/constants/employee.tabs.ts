import { TabRouteType } from '@dfl/react-security';

export const employeeTabs: TabRouteType[] = [
  {
    path: '/rrhh/employees/:id/personal',
    to: '/personal',
    label: 'tabs.personal',
    translate: true,
  },
  {
    path: '/rrhh/employees/:id/work',
    to: '/work',
    label: 'tabs.work',
    translate: true,
  },
  {
    path: '/rrhh/employees/:id/free-time',
    to: '/free-time',
    label: 'tabs.freeTime',
    translate: true,
  },
];
