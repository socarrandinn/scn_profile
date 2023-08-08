import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/inventory/settings/category/routes';

const CategoryModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings/categories'} memory />;
};

export default CategoryModule;
