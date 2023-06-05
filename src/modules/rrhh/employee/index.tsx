import { RouteLoader } from '@dfl/react-security';
import routes from 'modules/rrhh/employee/management/routes';

const EmployeeModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/employee'} memory />;
};

export default EmployeeModule;
