import { MessageList } from 'modules/client/message/pages';
import { RouteConfig } from '@dfl/react-security';
import { MESSAGE_PERMISSIONS } from 'modules/client/message/constants/message.permissions';

const routes: RouteConfig = {
  MessageList: {
    path: '/',
    permissions: MESSAGE_PERMISSIONS.MESSAGE_VIEW,
    component: MessageList,
  },
};

export default routes;
