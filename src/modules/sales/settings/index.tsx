import { RouteLoader } from '@dfl/react-security';
import { OrderSettingMenu } from 'modules/sales/settings/setting-menu';
import OrderStatusModule from 'modules/sales/settings/order-status';
import StorePickupModule from './store-pickup';
import CausesIncidenceModule from 'modules/sales/settings/causes-incidence';
import CauseCancellationModule from 'modules/sales/settings/cause-cancellation';
import HomeDeliveryModule from 'modules/sales/settings/home-delivery';

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
  CausesIncidenceList: {
    path: '/causes-incidence/*',
    component: CausesIncidenceModule,
  },
  CauseCancellationList: {
    path: '/cause-cancellation/*',
    component: CauseCancellationModule,
  },
    HomeDeliveryList: {
              path: '/home-deliveries/*',
              component: HomeDeliveryModule,
            }
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings'} memory />;
};

export default SettingsModule;
