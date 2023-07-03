import { RouteLoader } from '@dfl/react-security';
import { StoreSettingMenuPage } from 'modules/store/settings/setting-menu';
import StoreAreaModule from 'modules/store/settings/store-area';
import CategoryModule from 'modules/store/settings/category';

const routes = {
  settings: {
    path: '/',
    component: StoreSettingMenuPage,
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
