import buttonRoutes from 'modules/docs/buttons/routes';
import { RouteLoader } from '@dfl/react-security';

const Module = () => {
  return (
    <RouteLoader
      routes={{
        ...buttonRoutes,
      }}
      notfoundRedirect={'/docs/buttons'}
    />
  );
};

export default Module;
