import { TagsList } from 'modules/inventory/settings/tags/pages';
import { RouteConfig } from '@dfl/react-security';
import { TAGS_PERMISSIONS } from 'modules/inventory/settings/tags/constants/tags.permissions';

const routes: RouteConfig = {
  TagsList: {
    path: '/',
    permissions: TAGS_PERMISSIONS.TAGS_VIEW,
    component: TagsList,
  },
};

export default routes;
