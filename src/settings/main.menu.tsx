import { IMenu } from '@dfl/mui-react-common';
import SecurityOutlinedIcon from '@mui/icons-material/Security';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentInd';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import CampaignOutlinedIcon from '@mui/icons-material/Campaign';
import EqualizerOutlinedIcon from '@mui/icons-material/Equalizer';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccess';
import { JOB_POSITION_PERMISSIONS } from 'modules/rrhh/settings/job-position/constants/job-position.permissions';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/management/constants';
import { TEAM_PERMISSIONS } from 'modules/rrhh/team/constants';
import { ADVERTISEMENTS_PERMISSIONS } from 'modules/rrhh/advertisement/constants';
import { TIME_OFF_PERMISSIONS } from 'modules/rrhh/time-off/constants';
import { ANALYTIC_PERMISSIONS } from 'modules/rrhh/analytic/constants';

export const MAIN_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.general.title',
    items: [
      {
        title: 'main_menu.admin.section.general.home',
        path: '/',
        icon: <HomeIcon fontSize='small'/>,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.rrhh.title',
    prefix: '/rrhh',
    permissions: [JOB_POSITION_PERMISSIONS.JOB_POSITION_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.rrhh.employees',
        path: '/rrhh/employees',
        partialMatch: true,
        icon: <HowToRegIcon fontSize='small'/>,
        permissions: [EMPLOYEE_PERMISSIONS.EMPLOYEE_VIEW],
      },
      {
        title: 'main_menu.admin.section.rrhh.teams',
        path: '/rrhh/teams',
        partialMatch: true,
        icon: <PeopleAltIcon fontSize='small'/>,
        permissions: [TEAM_PERMISSIONS.TEAM_VIEW],
      },
      {
        title: 'main_menu.admin.section.rrhh.advertisements',
        path: '/rrhh/advertisements',
        partialMatch: true,
        icon: <CampaignOutlinedIcon fontSize='small'/>,
        permissions: [ADVERTISEMENTS_PERMISSIONS.VIEW],
      },
      {
        title: 'main_menu.admin.section.rrhh.analytics.title',
        path: '/rrhh/analytics',
        partialMatch: true,
        icon: <EqualizerOutlinedIcon fontSize='small'/>,
        permissions: [ANALYTIC_PERMISSIONS.RRHH],
        children: [
          {
            title: 'main_menu.admin.section.rrhh.analytics.general',
            path: '/rrhh/analytics/general',
            permissions: [ANALYTIC_PERMISSIONS.RRHH],
          },
          {
            title: 'main_menu.admin.section.rrhh.analytics.compensation',
            path: '/rrhh/analytics/compensation',
            permissions: [ANALYTIC_PERMISSIONS.RRHH],
          },
          // {
          //   title: 'main_menu.admin.section.rrhh.analytics.salary',
          //   path: '/rrhh/analytics/salary',
          //   disabled: true,
          //   permissions: [ANALYTIC_PERMISSIONS.RRHH],
          // },
        ]
      },
      {
        title: 'main_menu.admin.section.rrhh.timeOff.title',
        path: '/rrhh/time-off',
        partialMatch: true,
        icon: <BeachAccessOutlinedIcon fontSize='small'/>,
        permissions: [TIME_OFF_PERMISSIONS.TIME_OFF_VIEW],
        children: [
          {
            title: 'main_menu.admin.section.rrhh.timeOff.calendar',
            path: '/rrhh/time-off/calendar',
          },
          {
            title: 'main_menu.admin.section.rrhh.timeOff.request',
            path: '/rrhh/time-off/requests?page=0&fview=pending',
          }
        ]
      },
      {
        title: 'main_menu.admin.section.rrhh.settings',
        path: '/rrhh/settings',
        partialMatch: true,
        icon: <SettingsOutlinedIcon fontSize='small'/>,
        permissions: [JOB_POSITION_PERMISSIONS.JOB_POSITION_VIEW],
      },
    ],
  },
  {
    title: 'main_menu.admin.section.security.title',
    permissions: ['ADMIN'],
    prefix: '/security',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.security.users',
        path: '/security/users',
        icon: <AssignmentIndOutlinedIcon fontSize='small'/>,
        permissions: ['ADMIN'],
      },
      {
        title: 'main_menu.admin.section.security.roles',
        path: '/security/roles',
        partialMatch: true,
        icon: <SecurityOutlinedIcon fontSize='small'/>,
        permissions: ['ADMIN'],
      },
    ],
  },
];
