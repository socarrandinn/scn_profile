import { RouteLoader } from '@dfl/react-security';
import buttonsDemoRoutes from 'modules/demos/buttons/routes';
import inputsDemoRoutes from 'modules/demos/inputs/routes';
import containersDemoRoutes from 'modules/demos/containers/routes';
import layoutDemoRoutes from 'modules/demos/layouts/routes';
import formDemoRoutes from 'modules/demos/forms/routes';

const Module = () => {
  return (
    <RouteLoader
      routes={{
        ...buttonsDemoRoutes,
        ...inputsDemoRoutes,
        ...containersDemoRoutes,
        ...layoutDemoRoutes,
        ...formDemoRoutes
      }}
      notfoundRedirect={'/'}
    />
  );
};

export default Module;
