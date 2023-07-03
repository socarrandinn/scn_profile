import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InventoryIcon from '@mui/icons-material/Inventory';
import { STORE_AREA_PERMISSIONS } from 'modules/store/settings/store-area/constants';

export const storeSettingsMenu: IMenuItemPage[] = [
  {
    title: 'category:categoryList',
    description: 'category:description',
    path: '/store/settings/categories',
    icon: <AssignmentIndIcon fontSize='small'/>,
    // permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
  {
    title: 'storeArea:list',
    description: 'storeArea:description',
    path: '/store/settings/store-areas',
    icon: <InventoryIcon fontSize='small'/>,
    permissions: [STORE_AREA_PERMISSIONS.STORE_AREA_VIEW],
  },
];
