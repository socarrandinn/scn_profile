import { RouteLoader } from '@dfl/react-security';
import { StoreSettingMenuPage } from 'modules/inventory/settings/setting-menu';
import CategoryModule from 'modules/inventory/settings/category';
import ManufactureModule from 'modules/inventory/provider/manufacture';
import StoreAreaModule from 'modules/inventory/settings/store-area';
import SupplierProviderModule from 'modules/inventory/provider/supplier';
import LogisticsProviderModule from 'modules/inventory/provider/logistics';
import TabModule from 'modules/inventory/settings/tab';

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
    component: SupplierProviderModule,
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
  },
  TabList: {
    path: '/tabs/*',
    component: TabModule,
  },
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings'} memory />;
};

export default SettingsModule;
