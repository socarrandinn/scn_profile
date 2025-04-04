import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/cms/page/routes';

const PageModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/pages'} memory />;
};

export default PageModule;
