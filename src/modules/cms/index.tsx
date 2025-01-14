import { RouteLoader } from '@dfl/react-security';
import SeoModule from './seo';
import TestimonyModule from 'modules/cms/testimony';
import CollectionsModule from 'modules/cms/collections';

import BannerModule from 'modules/cms/banners';

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
  },

  BannerList: {
    path: '/banners/*',
    component: BannerModule,
  },
};

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo'} memory />;
};

export default Module;
