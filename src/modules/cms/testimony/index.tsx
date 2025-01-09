import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/cms/testimony/routes';

const TestimonyModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/testimonials'} memory />;
};

export default TestimonyModule;
