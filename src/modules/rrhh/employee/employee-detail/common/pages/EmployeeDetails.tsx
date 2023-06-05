import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import EmployeeDetailContainer from 'modules/rrhh/employee/employee-detail/common/containers/EmployeeDetailContainer';

const EmployeeDetails = () => {
  return (
        <PageLayout>
            <EmployeeDetailContainer/>
        </PageLayout>
  );
};

export default memo(EmployeeDetails);
