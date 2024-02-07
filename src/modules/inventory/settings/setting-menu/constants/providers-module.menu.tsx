import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { MANUFACTURE_PERMISSIONS } from 'modules/inventory/provider/manufacture/constants';
import { LOGISTIC, MANUFACTURER, SUPPLIER } from 'modules/inventory/constants/entities.style';

export const providersModuleMenu: IMenuItemPage[] = [
  {
    title: 'supplier:list',
    description: 'supplier:description',
    path: '/inventory/settings/suppliers',
    icon: SUPPLIER.ICON,
    color: SUPPLIER.COLOR,
  },
  {
    title: 'logistics:list',
    description: 'logistics:description',
    path: '/inventory/settings/logistics',
    icon: LOGISTIC.ICON,
    permissions: [LOGISTICS_PERMISSIONS.LOGISTICS_WRITE],
    color: LOGISTIC.COLOR,
  },
];

// eslint-disable-next-line eqeqeq
// const hasManufacturer = process.env.REACT_APP_MANUFACTURE == 'true'
// if (hasManufacturer) {
providersModuleMenu.push({
  title: 'manufacture:list',
  description: 'manufacture:description',
  path: '/inventory/settings/manufactures',
  icon: MANUFACTURER.ICON,
  permissions: [MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW],
  color: MANUFACTURER.COLOR,
});
// }
