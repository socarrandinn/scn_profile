import { IMenu } from '@dfl/mui-react-common';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { JOB_POSITION_PERMISSIONS } from 'modules/rrhh/settings/job-position/constants/job-position.permissions';

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
        title: 'main_menu.admin.section.rrhh.settings',
        path: '/rrhh/settings',
        partialMatch: true,
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
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
