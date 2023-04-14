import { IMenu } from '@dfl/mui-react-common';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';

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
    title: 'Componentes UI',
    atLessOne: true,
    items: [
      {
        title: 'Botones',
        path: '/buttons',
      },
      {
        title: 'Gráficos',
        path: '/charts',
        icon: <BarChartIcon fontSize='small' />,
      },
      {
        title: 'Formulario',
        path: '/forms',
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        children: [
          {
            title: 'Inputs',
            path: 'forms/inputs',
          },
          {
            title: 'Validaciones',
            path: 'forms/validations',
          },
          {
            title: 'Carga de archivos',
            path: 'forms/file-upload',
          },
        ],
      },
      {
        title: 'Layout',
        path: '/layout',
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        children: [
          {
            title: 'Sidebar menu',
            path: 'forms/inputs',
          },
          {
            title: 'Navbar',
            path: 'forms/validations',
          },
        ],
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
  {
    title: 'Páginas',
    atLessOne: true,
    items: [
      {
        title: 'Not Found Page',
        path: '/pages/not-found',
      },
      {
        title: 'Forbidden Page',
        path: '/pages/forbidden',
        partialMatch: true,
      },
    ],
  },
];
