import { RouteLoader } from '@dfl/react-security';
import buttonsDemoRoutes from 'modules/demos/buttons/routes';
import containersDemoRoutes from 'modules/demos/containers/routes';
import layoutDemoRoutes from 'modules/demos/layouts/routes';

const Module = () => {
  return (
    <RouteLoader
      routes={{
        ...buttonsDemoRoutes,
        ...containersDemoRoutes,
        ...layoutDemoRoutes
      }}
      notfoundRedirect={'/demos/buttons'}
    />
  );
};

export default Module;
