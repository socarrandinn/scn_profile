import { RouteConfig } from '@dfl/react-security';
import { MEDIA_PERMISSIONS } from '../constants/medias.permissions';
import MediaStoreContainer from '../containers/MediaStoreContainer';

const mediaRoutes: RouteConfig = {
  products: {
    path: '/store',
    component: MediaStoreContainer,
    permissions: [MEDIA_PERMISSIONS.MEDIA_VIEW],
  },
};

export default mediaRoutes;
