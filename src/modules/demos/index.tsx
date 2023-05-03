import { RouteLoader } from '@dfl/react-security';
import componentsDemoRoutes from 'modules/demos/components/routes';
import dataDisplayDemoRoutes from 'modules/demos/data-display/routes';
import containersDemoRoutes from 'modules/demos/containers/routes';
import layoutDemoRoutes from 'modules/demos/layouts/routes';
import formDemoRoutes from 'modules/demos/forms/routes';

const Module = () => {
  return (
    <RouteLoader
      routes={{
        ...componentsDemoRoutes,
        ...dataDisplayDemoRoutes,
        ...containersDemoRoutes,
        ...layoutDemoRoutes,
        ...formDemoRoutes
      }}
      notfoundRedirect={'/'}
    />
  );
};

export default Module;
