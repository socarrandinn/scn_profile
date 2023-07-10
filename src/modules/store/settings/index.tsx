import { RouteLoader } from '@dfl/react-security';
import { StoreSettingMenuPage } from 'modules/store/settings/setting-menu';

const routes = {
  settings: {
    path: '/',
    component: StoreSettingMenuPage,
  },
  // StoreAreaList: {
  //   path: '/store-areas/*',
  //   component: StoreAreaModule,
  // },
  // CategoryList: {
  //   path: '/categories/*',
  //   component: CategoryModule,
  // }
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings'} memory/>;
};

export default SettingsModule;
