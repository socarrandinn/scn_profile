import { memo } from 'react';
import { CenterPageLayout } from 'layouts/index';
import EmployeeDetailContainer from 'modules/rrhh/employee/employee-detail/common/containers/EmployeeDetailContainer';

const EmployeeDetails = () => {
  return (
    <CenterPageLayout>
      <EmployeeDetailContainer />
    </CenterPageLayout>
  );
};

export default memo(EmployeeDetails);
