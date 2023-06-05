import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/rrhh/team/routes';

const TeamModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/teams'} memory />;
};

export default TeamModule;
