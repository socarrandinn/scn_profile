import { RouteLoader } from '@dfl/react-security';
import SeoSettingModule from './settings';

const routes = {
  SalesSettings: {
    path: '/settings/*',
    component: SeoSettingModule,
  },

};
const SeoModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo/settings'} memory />;
};

export default SeoModule;
