import { RouteLoader } from '@dfl/react-security';
import { OrderSettingMenu } from 'modules/sales/settings/setting-menu';
import OrderStatusModule from 'modules/sales/settings/order-status';
import StorePickupModule from './store-pickup';
import CausesIncidenceModule from 'modules/sales/settings/causes-incidence';
import HomeDeliveryModule from 'modules/sales/settings/home-delivery';
import ExpressDeliveryModule from 'modules/sales/settings/express-delivery';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

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
  /*  CauseCancellationList: {
    path: '/cause-cancellation/*',
    component: CauseCancellationModule,
  }, */
  HomeDeliveryList: {
    path: '/home-deliveries/*',
    component: HomeDeliveryModule,
  },
  ExpressDeliveryList: {
    path: '/express-deliveries/*',
    component: ExpressDeliveryModule,
  },
};

const SettingsModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/sales/settings'} memory />
    </Suspense>
  );
};

export default SettingsModule;
