import { RouteLoader } from '@dfl/react-security';
import componentsDemoRoutes from 'modules/demos/components/routes';
import containersDemoRoutes from 'modules/demos/containers/routes';
import layoutDemoRoutes from 'modules/demos/layouts/routes';
import formDemoRoutes from 'modules/demos/forms/routes';

const Module = () => {
  return (
    <RouteLoader
      routes={{
        ...componentsDemoRoutes,
        ...containersDemoRoutes,
        ...layoutDemoRoutes,
        ...formDemoRoutes
      }}
      notfoundRedirect={'/'}
    />
  );
};

export default Module;
