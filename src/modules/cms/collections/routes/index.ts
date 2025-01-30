import { CollectionContentTypePage, CollectionTabListPage } from 'modules/cms/collections/pages';
import { RouteConfig } from '@dfl/react-security';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';

const routes: RouteConfig = {
  CollectionsList: {
    path: '/*',
    permissions: COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW,
    component: CollectionTabListPage,
  },
  CollectionsContentType: {
    path: '/:id/:contentType/*',
    permissions: COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW,
    component: CollectionContentTypePage,
  },
};

export default routes;
