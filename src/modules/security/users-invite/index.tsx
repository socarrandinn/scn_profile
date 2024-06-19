import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/security/users-invite/routes';

const UsersInviteModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/security/users-invite'} memory />;
};

export default UsersInviteModule;
