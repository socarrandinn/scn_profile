import { TabRouteType } from '@dfl/react-security';
import { COLLECTION_CONTENT_TYPE } from './collection-types';

const path: Record<COLLECTION_CONTENT_TYPE, string> = {
  [COLLECTION_CONTENT_TYPE.BANNER]: '/cms/collections/banners',
  [COLLECTION_CONTENT_TYPE.PRODUCT]: '/cms/collections/products',
  [COLLECTION_CONTENT_TYPE.CATEGORY]: '/cms/collections/categories',
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: '/cms/collections/testimonials',
};

export const collectionTypeTabs: TabRouteType[] = [
  {
    path: path[COLLECTION_CONTENT_TYPE.BANNER],
    to: '/banners',
    label: `collection:contentType.${COLLECTION_CONTENT_TYPE.BANNER}`,
    translate: true,
  },
  {
    path: path[COLLECTION_CONTENT_TYPE.PRODUCT],
    to: '/products',
    label: `collection:contentType.${COLLECTION_CONTENT_TYPE.PRODUCT}`,
    translate: true,
  },
  /*  {
    path: path[COLLECTION_CONTENT_TYPE.CATEGORY],
    to: '/categories',
    label: `collection:contentType.${COLLECTION_CONTENT_TYPE.CATEGORY}`,
    translate: true,
  },
  {
    path: path[COLLECTION_CONTENT_TYPE.TESTIMONY],
    to: '/testimonials',
    label: `collection:contentType.${COLLECTION_CONTENT_TYPE.TESTIMONY}`,
    translate: true,
  }, */
];
