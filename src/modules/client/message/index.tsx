import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/client/message/routes';

const MessageModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/client/messages'} memory />;
};

export default MessageModule;
