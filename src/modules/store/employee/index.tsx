import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/store/employee/management/routes';

const EmployeeModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/product'} memory />;
};

export default EmployeeModule;
