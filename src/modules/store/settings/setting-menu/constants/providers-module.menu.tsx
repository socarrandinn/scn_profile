import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { CATEGORY_PERMISSIONS } from 'modules/store/settings/category/constants';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import FactoryIcon from '@mui/icons-material/Factory';
import ArchiveIcon from '@mui/icons-material/Archive';
import { STORE_AREA_PERMISSIONS } from 'modules/store/settings/store-area/constants';

export const providersModuleMenu: IMenuItemPage[] = [
  {
    title: 'productProvider:productProvider',
    description: 'productProvider:description',
    path: '/store/settings/categories',
    icon: <ArchiveIcon fontSize='small'/>,
    permissions: [CATEGORY_PERMISSIONS.CATEGORY_VIEW],
  },
  {
    title: 'logistics:list',
    description: 'logistics:description',
    path: '/provider/logistics',
    icon: <AddHomeWorkIcon fontSize='small'/>,
    permissions: [STORE_AREA_PERMISSIONS.STORE_AREA_VIEW],
  },

];

// eslint-disable-next-line eqeqeq
// const hasManufacturer = process.env.REACT_APP_MANUFACTURE == 'true'
// if (hasManufacturer) {
providersModuleMenu.push({
  title: 'manufacture:list',
  description: 'manufacture:description',
  path: '/store/settings/manufacture',
  icon: <FactoryIcon fontSize='small'/>,
  permissions: [STORE_AREA_PERMISSIONS.STORE_AREA_VIEW],
},)
// }
