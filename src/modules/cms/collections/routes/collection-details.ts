import { RouteConfig } from '@dfl/react-security';
import { COLLECTIONS_PERMISSIONS } from '../constants';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionElementListPage } from '../pages';

const collectionDetailsRouters = (contentType: COLLECTION_CONTENT_TYPE): RouteConfig => ({
  /* general: {
    path: '/general',
    component: CollectionGeneralContainer,
    permissions: [COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW],
    data: {
      contentType,
    },
  }, */
  elements: {
    path: '/elements',
    component: CollectionElementListPage,
    permissions: [COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW],
    data: {
      contentType,
    },
  },
});

export default collectionDetailsRouters;
