import { RouteLoader } from '@dfl/react-security';
import MessageModule from 'modules/client/message';

const routes = {
    MessageList: {
              path: '/messages/*',
              component: MessageModule,
            }
};

const Module = () => {
    return <RouteLoader routes={routes} notfoundRedirect={'/client'} memory />;
};

export default Module;
