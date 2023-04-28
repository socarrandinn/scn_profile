import { IMenu } from '@dfl/mui-react-common';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
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
        title: 'main_menu.demos.buttons',
        path: '/demos/components/buttons',
      },
      {
        title: 'main_menu.demos.inputs',
        path: '/demos/components/inputs',
      },
      {
        title: 'main_menu.demos.select',
        path: '/demos/components/select',
      },
      {
        title: 'main_menu.demos.datetime',
        path: '/demos/components/datetime',
      },
      {
        title: 'Gráficos',
        path: '/demos/charts',
        icon: <BarChartIcon fontSize='small' />,
      },
      {
        title: 'main_menu.demos.layouts.title',
        path: '',
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        children: [
          {
            title: 'main_menu.demos.layouts.sideBar',
            path: '/demos/layouts/sidebar',
          },
          {
            title: 'main_menu.demos.layouts.page',
            path: '/demos/layouts/page',
          },
          {
            title: 'main_menu.demos.layouts.centerPage',
            path: '/demos/layouts/center-page',
          },
          {
            title: 'main_menu.demos.layouts.scrollPage',
            path: '/demos/layouts/scroll-page',
          },
          {
            title: 'main_menu.demos.layouts.paperPage',
            path: '/demos/layouts/paper-page',
          },
          {
            title: 'main_menu.demos.layouts.tabsPage',
            path: '/demos/layouts/tabs-page',
          },
        ],
      },
      {
        title: 'main_menu.demos.forms.title',
        path: '',
        icon: <DynamicFormIcon fontSize='small' />,
        children: [
          /* {
            title: 'main_menu.demos.forms.inputs',
            path: '/demos/forms/inputs',
          }, */
          {
            title: 'main_menu.demos.forms.validations',
            path: '/demos/forms/validations',
          },
          {
            title: 'main_menu.demos.forms.asyncValidation',
            path: '/demos/forms/async-validation',
          },
          {
            title: 'main_menu.demos.forms.conditionalValidation',
            path: '/demos/forms/conditional-validation',
          },
          {
            title: 'main_menu.demos.forms.nestedFields',
            path: '/demos/forms/nested-fields',
          },
          {
            title: 'main_menu.demos.forms.listFields',
            path: '/demos/forms/list-fields',
          },
        ],
      },
      {
        title: 'main_menu.demos.containers.title',
        path: '',
        children: [
          {
            title: 'main_menu.demos.containers.flexBox',
            path: '/demos/containers/flex-box',
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
