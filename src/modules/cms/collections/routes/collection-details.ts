import { RouteConfig } from '@dfl/react-security';
import ProductInventoryContainer from 'modules/inventory/product/containers/ProductInventoryContainer';

import { COLLECTIONS_PERMISSIONS } from '../constants';
import CollectionGeneralContainer from '../containers/tabs/CollectionGeneralContainer';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

const collectionDetailsRouters = (contentType: COLLECTION_CONTENT_TYPE): RouteConfig => ({
  general: {
    path: '/general',
    component: CollectionGeneralContainer,
    permissions: [COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW],
    data: {
      contentType,
    },
  },
  elements: {
    path: '/elements',
    component: ProductInventoryContainer,
    permissions: [COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW],
    data: {
      contentType,
    },
  },
});

export default collectionDetailsRouters;
