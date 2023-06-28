import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export const storeSettingsMenu: IMenuItemPage[] = [
  {
    title: 'category:categoryList',
    description: 'category:description',
    path: '/store/settings/categories',
    icon: <AssignmentIndIcon fontSize='small'/>,
    // permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
];
