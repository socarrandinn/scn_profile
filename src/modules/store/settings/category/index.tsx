import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/settings/category/routes';

const CategoryModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings/categories'} memory />;
};

export default CategoryModule;
