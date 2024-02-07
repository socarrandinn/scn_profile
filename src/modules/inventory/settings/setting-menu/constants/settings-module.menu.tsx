import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants';
import { STORE_AREA_PERMISSIONS } from 'modules/inventory/settings/store-area/constants';
import { CATEGORIES, STORE_AREA } from 'modules/inventory/constants/entities.style';

export const storeSettingsMenu: IMenuItemPage[] = [
  {
    title: 'category:list',
    description: 'category:description',
    path: '/inventory/settings/categories',
    icon: CATEGORIES.ICON,
    color: CATEGORIES.COLOR,
    permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
  {
    title: 'storeArea:list',
    description: 'storeArea:description',
    path: '/inventory/settings/store-areas',
    icon: STORE_AREA.ICON,
    permissions: [STORE_AREA_PERMISSIONS.STORE_AREA_VIEW],
    color: STORE_AREA.COLOR,
  },
];
