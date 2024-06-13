import { RouteLoader } from '@dfl/react-security';
import { OfferSettingMenu } from './setting-menu';
import { OrderStatusModule } from 'modules/index';
import ProductDiscountModule from '../product-discount';

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
    path: '/order_offers/*',
    component: OrderStatusModule
  },
  CausesIncidenceList: {
    path: '/offers_to_clients/*',
    component: OrderStatusModule
  },
  CauseCancellationList: {
    path: '/discount_coupons/*',
    component: OrderStatusModule
  }
};

const SettingModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/offers/settings'} memory />;
};

export default SettingModule;
