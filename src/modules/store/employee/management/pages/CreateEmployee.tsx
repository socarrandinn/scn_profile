import { memo } from 'react';
import { CreateEmployeeProvider } from 'modules/store/employee/management/contexts/CreateEmployeeContext';
import EmployeeCreate from 'modules/store/employee/management/containers/EmployeeCreate';

const CreateEmployee = () => {
  return (
    <CreateEmployeeProvider>
      <EmployeeCreate />
    </CreateEmployeeProvider>
  );
};

export default memo(CreateEmployee);
