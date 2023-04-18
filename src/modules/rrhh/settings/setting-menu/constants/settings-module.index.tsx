import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import CategoryIcon from '@mui/icons-material/Category';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';

export const rrhhSettingsMenu: IMenuItemPage[] = [
  {
    title: 'main_menu.admin.section.general.stores',
    description: 'main_menu.admin.section.general.stores',
    path: '/rrhh/settings/job-positions',
    icon: <StoreMallDirectoryOutlinedIcon fontSize='small'/>,
    permissions: ['STORE_ADMIN'],
  },
  {
    title: 'main_menu.admin.section.settings.categories',
    description: 'main_menu.admin.section.settings.categories',
    path: '/rrhh/settings/reason-for-job-change',
    icon: <CategoryIcon fontSize='small'/>,
    permissions: ['CATEGORY_VIEW'],
  },
  {
    title: 'main_menu.admin.section.settings.subcategories',
    description: 'main_menu.admin.section.settings.subcategories',
    path: '/rrhh/settings/job-positions',
    icon: <CategoryIcon fontSize='small'/>,
    permissions: ['CATEGORY_VIEW'],
  }
];
