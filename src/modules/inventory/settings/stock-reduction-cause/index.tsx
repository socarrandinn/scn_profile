import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/settings/stock-reduction-cause/routes';

const StockReductionCauseModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/stock-reduction-causes'} memory />;
};

export default StockReductionCauseModule;
