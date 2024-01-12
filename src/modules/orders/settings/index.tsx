import { RouteLoader } from '@dfl/react-security';
import { OrderSettingMenu } from 'modules/orders/settings/setting-menu';
import OrderStatusModule from 'modules/orders/settings/order-status';

const routes = {
  settings: {
    path: '/',
    component: OrderSettingMenu,
  },
  ManufactureAreaList: {
    path: '/order-status/*',
    component: OrderStatusModule,
  },
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/orders/settings'} memory />;
};

export default SettingsModule;
