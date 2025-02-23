import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/conciliation/adjustment/routes';

const ReconciliationAdjustmentModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/conciliation/reconciliation-adjustment'} memory />;
};

export default ReconciliationAdjustmentModule;
