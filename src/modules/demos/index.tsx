import buttonsDemoRoutes from 'modules/demos/buttons/routes';
import { RouteLoader } from '@dfl/react-security';

const Module = () => {
  return (
    <RouteLoader
      routes={{
        ...buttonsDemoRoutes,
      }}
      notfoundRedirect={'/demos/buttons'}
    />
  );
};

export default Module;
