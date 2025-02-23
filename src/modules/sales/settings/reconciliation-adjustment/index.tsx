import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/reconciliation-adjustment/routes';

const ReconciliationAdjustmentModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/conciliation/reconciliation-adjustment'} memory />;
};

export default ReconciliationAdjustmentModule;
