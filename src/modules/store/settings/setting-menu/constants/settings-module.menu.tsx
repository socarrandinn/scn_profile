import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { CATEGORY_PERMISSIONS } from 'modules/store/settings/category/constants';
import NoFoodIcon from '@mui/icons-material/NoFood';
import InventoryIcon from '@mui/icons-material/Inventory';
import { STORE_AREA_PERMISSIONS } from 'modules/store/settings/store-area/constants';

export const storeSettingsMenu: IMenuItemPage[] = [
  {
    title: 'category:list',
    description: 'category:description',
    path: '/store/settings/categories',
    icon: <NoFoodIcon fontSize='small'/>,
    permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
  {
    title: 'storeArea:list',
    description: 'storeArea:description',
    path: '/store/settings/store-areas',
    icon: <InventoryIcon fontSize='small'/>,
    permissions: [STORE_AREA_PERMISSIONS.STORE_AREA_VIEW],
  },
];
