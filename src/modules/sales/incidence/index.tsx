import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/incidence/routes';

const IncidenceModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/incidences'} memory />;
};

export default IncidenceModule;
