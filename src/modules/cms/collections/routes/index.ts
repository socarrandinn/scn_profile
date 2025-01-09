import { CollectionsList } from 'modules/cms/collections/pages';
import { RouteConfig } from '@dfl/react-security';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';

const routes: RouteConfig = {
  CollectionsList: {
    path: '/',
    permissions: COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW,
    component: CollectionsList,
  },
};

export default routes;
