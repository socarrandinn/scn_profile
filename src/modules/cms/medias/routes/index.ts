import { RouteConfig } from '@dfl/react-security';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants/collections.permissions';
import { MediaStorePage } from '../pages';

const routes: RouteConfig = {
  CollectionsList: {
    path: '/',
    permissions: COLLECTIONS_PERMISSIONS.COLLECTIONS_VIEW,
    component: MediaStorePage,
  },
};

export default routes;
