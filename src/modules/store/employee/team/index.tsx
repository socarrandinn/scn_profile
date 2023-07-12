import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/employee/team/routes';

const TeamModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/employee/teams'} memory />;
};

export default TeamModule;
