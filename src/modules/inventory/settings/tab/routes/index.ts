import { TabList } from 'modules/inventory/settings/tab/pages';
import { RouteConfig } from '@dfl/react-security';
import { TAB_PERMISSIONS } from 'modules/inventory/settings/tab/constants/tab.permissions';

const routes: RouteConfig = {
  TabList: {
    path: '/',
    permissions: TAB_PERMISSIONS.TAB_VIEW,
    component: TabList,
  },
};

export default routes;
