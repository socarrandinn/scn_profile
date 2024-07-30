import { RouteLoader } from '@dfl/react-security';
import { OfferSettingMenu } from './setting-menu';
import { OrderStatusModule } from 'modules/index';
import ProductDiscountModule from '../product-discount';
import OfferOrderModule from '../offer';
import CouponOrderModule from '../coupon';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const routes = {
  settings: {
    path: '/',
    component: OfferSettingMenu,
  },
  ManufactureAreaList: {
    path: '/product_discounts/*',
    component: ProductDiscountModule,
  },
  StorePickupList: {
    path: '/offer_orders/*',
    component: OfferOrderModule,
  },
  CausesIncidenceList: {
    path: '/offers_to_clients/*',
    component: OrderStatusModule,
  },
  CauseCancellationList: {
    path: '/coupons/*',
    component: CouponOrderModule,
  },
};

const SettingModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/offers/settings'} memory />
    </Suspense>
  );
};

export default SettingModule;
