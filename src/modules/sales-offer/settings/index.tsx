import { RouteLoader } from '@dfl/react-security';
import { OfferSettingMenu } from './setting-menu';
import { OrderStatusModule } from 'modules/index';
import ProductDiscountModule from '../product-discount';
import OfferOrderModule from '../offer';
import CouponOrderModule from '../coupon';

const routes = {
  settings: {
    path: '/',
    component: OfferSettingMenu,
  },
  ManufactureAreaList: {
    path: '/product_discounts/*',
    component: ProductDiscountModule
  },
  StorePickupList: {
    path: '/offer_orders/*',
    component: OfferOrderModule
  },
  CausesIncidenceList: {
    path: '/offers_to_clients/*',
    component: OrderStatusModule
  },
  CauseCancellationList: {
    path: '/coupons/*',
    component: CouponOrderModule
  }
};

const SettingModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/offers/settings'} memory />;
};

export default SettingModule;
