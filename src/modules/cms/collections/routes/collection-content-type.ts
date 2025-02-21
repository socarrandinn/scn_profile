import { RouteConfig } from '@dfl/react-security';
import { CollectionsList } from '../pages';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

const collectionContentTypeRoutes: RouteConfig = {
  banners: {
    path: '/banners',
    component: CollectionsList,
    data: {
      contentType: COLLECTION_CONTENT_TYPE.BANNER,
    },
  },
  products: {
    path: '/products',
    component: CollectionsList,
    data: {
      contentType: COLLECTION_CONTENT_TYPE.PRODUCT,
    },
  },
  /*   categories: {
    path: '/categories',
    component: CollectionsList,
    data: {
      contentType: COLLECTION_CONTENT_TYPE.CATEGORY,
    },
  },
  testimonials: {
    path: '/testimonials',
    component: CollectionsList,
    data: {
      contentType: COLLECTION_CONTENT_TYPE.TESTIMONY,
    },
  }, */
};
export default collectionContentTypeRoutes;
