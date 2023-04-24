import { memo } from 'react';
import { CenterPageLayout } from 'layouts/index';
import EmployeeDetailContainer from 'modules/rrhh/employee/containers/EmployeeDetailContainer';

const EmployeeDetails = () => {
  return (
    <CenterPageLayout>
      <EmployeeDetailContainer />
    </CenterPageLayout>
  );
};

export default memo(EmployeeDetails);
