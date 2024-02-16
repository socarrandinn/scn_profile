import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/causes-incidence/routes';

const CausesIncidenceModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings/causes-incidences'} memory />;
};

export default CausesIncidenceModule;
