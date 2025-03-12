import { RouteLoader } from '@dfl/react-security';
import { OrderSettingMenu } from 'modules/sales/settings/setting-menu';
import OrderStatusModule from 'modules/sales/settings/order-status';
import CausesIncidenceModule from 'modules/sales/settings/causes-incidence';
import HomeDeliveryModule from 'modules/sales/settings/home-delivery';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';
import ConciliationAdjustmentCausesModule from 'modules/sales/settings/conciliation-adjustment-causes';
import ReconciliationAdjustmentModule from './reconciliation-adjustment';
import PaymentSettingsModule from 'modules/sales/settings/payment-settings';

const routes = {
  settings: {
    path: '/',
    component: OrderSettingMenu,
  },
  ManufactureAreaList: {
    path: '/order-status/*',
    component: OrderStatusModule,
  },
  CausesIncidenceList: {
    path: '/causes-incidence/*',
    component: CausesIncidenceModule,
  },
  HomeDeliveryList: {
    path: '/home-deliveries/*',
    component: HomeDeliveryModule,
  },
  ConciliationAdjustmentCausesList: {
    path: '/conciliation-adjustment-causes/*',
    component: ConciliationAdjustmentCausesModule,
  },
  ReconciliationAdjustmentCausesList: {
    path: '/reconciliation-adjustment/*',
    component: ReconciliationAdjustmentModule,
  },
    PaymentSettingsList: {
              path: '/payment-settings/*',
              component: PaymentSettingsModule,
            }
};

const SettingsModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/sales/settings'} memory />
    </Suspense>
  );
};

export default SettingsModule;
