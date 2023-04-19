import buttonsDemoRoutes from 'modules/demos/buttons/routes';
import containersDemoRoutes from 'modules/demos/containers/routes';
import { RouteLoader } from '@dfl/react-security';

const Module = () => {
  return (
    <RouteLoader
      routes={{
        ...buttonsDemoRoutes,
        ...containersDemoRoutes,
      }}
      notfoundRedirect={'/demos/buttons'}
    />
  );
};

export default Module;
