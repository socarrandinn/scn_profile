import { RouteLoader } from '@dfl/react-security';
import { StoreSettingMenuPage } from 'modules/store/settings/setting-menu';
import CategoryModule from 'modules/store/settings/category';

const routes = {
  settings: {
    path: '/',
    component: StoreSettingMenuPage,
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
