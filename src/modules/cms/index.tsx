import { RouteLoader } from '@dfl/react-security';
import SeoModule from './seo';
import TestimonyModule from 'modules/cms/testimony';

const routes = {
  SeoSettings: {
    path: '/seo/*',
    component: SeoModule,
  },
  TestimonyList: {
    path: '/testimonials/*',
    component: TestimonyModule,
  }
};

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo'} memory />;
};

export default Module;
