import { RouteLoader } from '@dfl/react-security';
import { OrderSettingMenu } from 'modules/sales/settings/setting-menu';
import OrderStatusModule from 'modules/sales/settings/order-status';
import StorePickupModule from './store-pickup';

const routes = {
  settings: {
    path: '/',
    component: OrderSettingMenu,
  },
  ManufactureAreaList: {
    path: '/order-status/*',
    component: OrderStatusModule,
  },
  StorePickupList: {
    path: '/store-pickup/*',
    component: StorePickupModule,
  },
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings'} memory />;
};

export default SettingsModule;
