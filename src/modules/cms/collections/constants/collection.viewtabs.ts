import { TabViews } from '@dfl/mui-admin-layout';
import { COLLECTION_CONTENT_TYPE } from './collection-types';

export const collectionViewTabs: TabViews = {
  banner: {
    title: 'contentType.BANNER',
    filters: {
      type: 'TERM',
      field: 'contentType',
      value: COLLECTION_CONTENT_TYPE.BANNER,
    },
  },
  product: {
    title: 'contentType.PRODUCT',
    filters: {
      type: 'TERM',
      field: 'contentType',
      value: COLLECTION_CONTENT_TYPE.PRODUCT,
    },
  },
  testimony: {
    title: 'contentType.TESTIMONY',
    filters: {
      type: 'TERM',
      field: 'contentType',
      value: COLLECTION_CONTENT_TYPE.TESTIMONY,
    },
  },
  category: {
    title: 'contentType.CATEGORY',
    filters: {
      type: 'TERM',
      field: 'contentType',
      value: COLLECTION_CONTENT_TYPE.CATEGORY,
    },
  },
};
