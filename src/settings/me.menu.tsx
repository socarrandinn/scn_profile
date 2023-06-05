import { IMenu } from '@dfl/mui-react-common';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ME_MENU: IMenu[] = [

  {
    title: 'main_menu.admin.section.rrhh.myInfo',
    prefix: '/rrhh',
    atLessOne: true,
    items: [
      {
        title: 'employee:tabs.personal',
        path: '/rrhh/employees/me/personal',
        partialMatch: true,
        icon: <AccountCircleIcon fontSize='small'/>,
      },
      {
        title: 'employee:tabs.work',
        path: '/rrhh/employees/me/work',
        partialMatch: true,
        icon: <BusinessCenterIcon fontSize='small'/>,
      },
      {
        title: 'employee:tabs.freeTime',
        path: '/rrhh/employees/me/free-time',
        partialMatch: true,
        icon: <BeachAccessIcon fontSize='small'/>,
      },
      {
        title: 'employee:tabs.benefits',
        path: '/rrhh/employees/me/benefits',
        partialMatch: true,
        disabled: true,
        icon: <FavoriteIcon fontSize='small'/>,
      },
    ],
  }
];
