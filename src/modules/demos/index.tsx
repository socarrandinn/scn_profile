import buttonsDemoRoutes from 'modules/demos/buttons/routes';
import layoutDemoRoutes from 'modules/demos/containers/routes';
import { RouteLoader } from '@dfl/react-security';

const Module = () => {
  return (
    <RouteLoader
      routes={{
        ...buttonsDemoRoutes,
        ...layoutDemoRoutes,
      }}
      notfoundRedirect={'/demos/buttons'}
    />
  );
};

export default Module;
