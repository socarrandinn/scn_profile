import { RouteLoader } from '@dfl/react-security';
import { StoreSettingMenuPage } from 'modules/store/settings/setting-menu';
import CategoryModule from 'modules/store/settings/category';
import ManufactureModule from 'modules/store/provider/manufacture';
import StoreAreaModule from 'modules/store/settings/store-area';
import ProductProviderModule from 'modules/store/provider/products';
import LogisticsProviderModule from 'modules/store/provider/logistics';

const routes = {
  settings: {
    path: '/',
    component: StoreSettingMenuPage,
  },
  ManufactureAreaList: {
    path: '/manufactures/*',
    component: ManufactureModule,
  },
  SupplierAreaList: {
    path: '/suppliers/*',
    component: ProductProviderModule,
  },
  LogisticList: {
    path: '/logistics/*',
    component: LogisticsProviderModule,
  },
  StoreAreaList: {
    path: '/store-areas/*',
    component: StoreAreaModule,
  },
  CategoryList: {
    path: '/categories/*',
    component: CategoryModule,
  }
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings'} memory/>;
};

export default SettingsModule;
