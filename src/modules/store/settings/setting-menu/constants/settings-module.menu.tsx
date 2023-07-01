import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { CATEGORY_PERMISSIONS } from 'modules/store/settings/category/constants';
import NoFoodIcon from '@mui/icons-material/NoFood';

export const storeSettingsMenu: IMenuItemPage[] = [
  {
    title: 'category:list',
    description: 'category:description',
    path: '/store/settings/categories',
    icon: <NoFoodIcon fontSize='small'/>,
    permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
];
