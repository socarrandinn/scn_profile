import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/store/settings';
import StoreModule from 'modules/store/store';

const routes = {
  JobPositionList: {
    path: '/settings/*',
    component: SettingsModule,
  },
  StoreList: {
    path: '/stores/*',
    component: StoreModule,
  }
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings'} memory/>;
};

export default Module;
