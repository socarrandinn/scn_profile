import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/settings/tags/routes';

const TagsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/tags'} memory />;
};

export default TagsModule;
