import { IMenu } from '@dfl/mui-react-common';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import { JOB_POSITION_PERMISSIONS } from 'modules/rrhh/settings/job-position/constants/job-position.permissions';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants';
import { TEAM_PERMISSIONS } from 'modules/rrhh/team/constants';
import { ADVERTISEMENTS_PERMISSIONS } from 'modules/rrhh/advertisement/constants';

export const MAIN_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.general.title',
    items: [
      {
        title: 'main_menu.admin.section.general.home',
        path: '/',
        icon: <HomeOutlinedIcon fontSize='small' />,
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
        icon: <HowToRegOutlinedIcon fontSize='small' />,
        permissions: [EMPLOYEE_PERMISSIONS.EMPLOYEE_VIEW],
      },
      {
        title: 'main_menu.admin.section.rrhh.teams',
        path: '/rrhh/teams',
        partialMatch: true,
        icon: <PeopleAltOutlinedIcon fontSize='small' />,
        permissions: [TEAM_PERMISSIONS.TEAM_VIEW],
      },
      {
        title: 'main_menu.admin.section.rrhh.advertisements',
        path: '/rrhh/advertisements',
        partialMatch: true,
        icon: <CampaignOutlinedIcon fontSize='small' />,
        permissions: [ADVERTISEMENTS_PERMISSIONS.VIEW],
      },
      {
        title: 'main_menu.admin.section.rrhh.settings',
        path: '/rrhh/settings',
        partialMatch: true,
        icon: <SettingsOutlinedIcon fontSize='small' />,
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
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        permissions: ['ADMIN'],
      },
      {
        title: 'main_menu.admin.section.security.roles',
        path: '/security/roles',
        partialMatch: true,
        icon: <SecurityOutlinedIcon fontSize='small' />,
        permissions: ['ADMIN'],
      },
    ],
  },
];
