import { RouteLoader } from '@dfl/react-security';
import CauseCancellationModule from 'modules/cause-cancellation';

const routes = {
  CauseCancellationList: {
    path: '/cause-cancellations/*',
    component: CauseCancellationModule,
  },
};

const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/'} memory />;
};

export default Module;
