import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { CATEGORY_PERMISSIONS } from 'modules/store/settings/category/constants';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import FactoryIcon from '@mui/icons-material/Factory';
import ArchiveIcon from '@mui/icons-material/Archive';
import { STORE_AREA_PERMISSIONS } from 'modules/store/settings/store-area/constants';
import { LOGISTICS_PERMISSIONS } from 'modules/provider/logistics/constants';

export const providersModuleMenu: IMenuItemPage[] = [
  {
    title: 'productProvider:productProvider',
    description: 'productProvider:description',
    path: '/store/settings/categories',
    icon: <ArchiveIcon fontSize='small'/>,
    permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
  {
    title: 'provider:logisticProvider',
    description: 'logisticProvider:description',
    path: '/provider/logistics',
    icon: <AddHomeWorkIcon fontSize='small'/>,
    permissions: [LOGISTICS_PERMISSIONS.LOGISTICS_WRITE],
  },
  {
    title: 'provider:manufacturerList',
    description: 'manufacturer:description',
    path: '/store/settings/manufacture',
    icon: <FactoryIcon fontSize='small'/>,
    permissions: [STORE_AREA_PERMISSIONS.STORE_AREA_VIEW],
  },
];
