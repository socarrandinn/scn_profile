import { RouteLoader } from '@dfl/react-security';
import ReconciliationAdjustmentModule from 'modules/sales/conciliation/adjustment';

const routes = {
  /*  Conciliation: {
    path: '/conciliation/*',
    component: () => <></>
  }, */
  ConciliationAdjustment: {
    path: '/reconciliation-adjustment/*',
    component: ReconciliationAdjustmentModule,
  },
};
const ConciliationModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/conciliation/reconciliation-adjustment'} memory />;
};

export default ConciliationModule;
