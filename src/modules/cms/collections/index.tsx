import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/cms/collections/routes';

const CollectionsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/collections'} memory />;
};

export default CollectionsModule;
