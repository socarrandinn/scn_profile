import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/employee/settings/category/routes';

const CategoryModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/categories'} memory />;
};

export default CategoryModule;
