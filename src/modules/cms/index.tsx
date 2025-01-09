import { RouteLoader } from '@dfl/react-security';
import SeoModule from './seo';
import TestimonyModule from 'modules/cms/testimony';
import CollectionsModule from 'modules/cms/collections';

const routes = {
  SeoSettings: {
    path: '/seo/*',
    component: SeoModule,
  },
  TestimonyList: {
    path: '/testimonials/*',
    component: TestimonyModule,
  },
  CollectionsList: {
    path: '/collections/*',
    component: CollectionsModule,
  }
};

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo'} memory />;
};

export default Module;
