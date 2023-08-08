import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import FactoryIcon from '@mui/icons-material/Factory';
import ArchiveIcon from '@mui/icons-material/Archive';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { MANUFACTURE_PERMISSIONS } from 'modules/inventory/provider/manufacture/constants';

export const providersModuleMenu: IMenuItemPage[] = [
  {
    title: 'products:list',
    description: 'products:description',
    path: '/inventory/settings/suppliers',
    icon: <ArchiveIcon fontSize='small'/>,
  },
  {
    title: 'logistics:list',
    description: 'logistics:description',
    path: '/inventory/settings/logistics',
    icon: <AddHomeWorkIcon fontSize='small'/>,
    permissions: [LOGISTICS_PERMISSIONS.LOGISTICS_WRITE],
  },

];

// eslint-disable-next-line eqeqeq
// const hasManufacturer = process.env.REACT_APP_MANUFACTURE == 'true'
// if (hasManufacturer) {
providersModuleMenu.push({
  title: 'manufacture:list',
  description: 'manufacture:description',
  path: '/inventory/settings/manufactures',
  icon: <FactoryIcon fontSize='small'/>,
  permissions: [MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW],
},)
// }
