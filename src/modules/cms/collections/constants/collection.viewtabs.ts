import { TabViews } from '@dfl/mui-admin-layout';
import { COLLECTION_CONTENT_TYPE } from './collection-types';

export const collectionViewTabs: TabViews = {
  all: {
    title: 'contentType.ALL',
    filters: {},
  },
  business: {
    title: 'contentType.BANNER',
    filters: {
      type: 'TERM',
      field: 'contentType',
      value: COLLECTION_CONTENT_TYPE.BANNER,
    },
  },
  business_category: {
    title: 'contentType.PRODUCT',
    filters: {
      type: 'TERM',
      field: 'contentType',
      value: COLLECTION_CONTENT_TYPE.PRODUCT,
    },
  },
  product: {
    title: 'contentType.TESTIMONY',
    filters: {
      type: 'TERM',
      field: 'contentType',
      value: COLLECTION_CONTENT_TYPE.TESTIMONY,
    },
  },
  service: {
    title: 'contentType.CATEGORY',
    filters: {
      type: 'TERM',
      field: 'contentType',
      value: COLLECTION_CONTENT_TYPE.CATEGORY,
    },
  },
};
