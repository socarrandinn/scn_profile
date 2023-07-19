import { RouteLoader } from '@dfl/react-security';
import { StoreSettingMenuPage } from 'modules/store/settings/setting-menu';
import CategoryModule from 'modules/store/settings/category';
import ManufactureModule from 'modules/provider/manufacture';

const routes = {
  settings: {
    path: '/',
    component: StoreSettingMenuPage,
  },
  StoreAreaList: {
    path: '/manufacture/*',
    component: ManufactureModule,
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
