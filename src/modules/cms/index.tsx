import { RouteLoader } from '@dfl/react-security';
import SeoModule from './seo';

const routes = {
  SeoSettings: {
    path: '/seo/*',
    component: SeoModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo'} memory />;
};

export default Module;
