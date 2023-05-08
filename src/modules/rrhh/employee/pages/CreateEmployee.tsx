import { memo } from 'react';
import { CreateEmployeeProvider } from 'modules/rrhh/employee/contexts/CreateEmployeeContext';
import EmployeeCreate from 'modules/rrhh/employee/containers/EmployeeCreate';

const CreateEmployee = () => {
  return (
    <CreateEmployeeProvider>
      <EmployeeCreate />
    </CreateEmployeeProvider>
  );
};

export default memo(CreateEmployee);
