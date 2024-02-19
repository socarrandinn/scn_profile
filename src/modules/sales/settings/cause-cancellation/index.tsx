import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/sales/settings/cause-cancellation/routes';

const CauseCancellationModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings/cause-cancellations'} memory />;
};

export default CauseCancellationModule;
