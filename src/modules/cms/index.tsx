import { RouteLoader } from '@dfl/react-security';
import SeoModule from './seo';
import TestimonyModule from 'modules/cms/testimony';
import CollectionsModule from 'modules/cms/collections';

import BannerModule from 'modules/cms/banners';
import MediasModule from './medias';
import PageModule from 'modules/cms/page';

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
  Medias: {
    path: '/medias/*',
    component: MediasModule,
  },
  PageList: {
    path: '/pages/*',
    component: PageModule,
  }
};

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/collections'} memory />;
};

export default Module;
