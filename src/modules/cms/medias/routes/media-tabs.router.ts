import { RouteConfig } from '@dfl/react-security';
import { MEDIA_PERMISSIONS } from '../constants/medias.permissions';

import MediaStoreContainer from '../containers/MediaStoreContainer';
import MediaUploadContainer from '../containers/MediaUploadContainer';

const mediaRoutes: RouteConfig = {
  general: {
    path: '/upload',
    component: MediaUploadContainer,
    permissions: [MEDIA_PERMISSIONS.MEDIA_WRITE],
  },
  products: {
    path: '/store',
    component: MediaStoreContainer,
    permissions: [MEDIA_PERMISSIONS.MEDIA_VIEW],
  },
};

export default mediaRoutes;
