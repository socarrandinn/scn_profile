import { IMenu } from '@dfl/mui-react-common';
import SecurityOutlinedIcon from '@mui/icons-material/Security';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentInd';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

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
    title: 'main_menu.admin.section.clients.title',
    prefix: '/client',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.clients.messages',
        path: '/client/messages',
        icon: <HomeIcon fontSize='small'/>,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.store.title',
    prefix: '/store',
    // permissions: [STORE_PERMISSIONS.JOB_POSITION_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.store.settings',
        path: '/store/settings',
        partialMatch: true,
        icon: <SettingsOutlinedIcon fontSize='small'/>,
        // permissions: [STORE_PERMISSIONS.SETTINGS],
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
