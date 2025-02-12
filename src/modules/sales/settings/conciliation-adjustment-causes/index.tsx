import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/conciliation-adjustment-causes/routes';

const ConciliationAdjustmentCausesModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings/conciliation-adjustment-causes'} memory />;
};

export default ConciliationAdjustmentCausesModule;
