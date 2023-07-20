import { RouteLoader } from '@dfl/react-security';
import { StoreSettingMenuPage } from 'modules/store/settings/setting-menu';
import CategoryModule from 'modules/store/settings/category';
import ManufactureModule from 'modules/provider/manufacture';
import StoreAreaModule from 'modules/store/settings/store-area';

const routes = {
  settings: {
    path: '/',
    component: StoreSettingMenuPage,
  },
  ManufactureAreaList: {
    path: '/manufacture/*',
    component: ManufactureModule,
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
