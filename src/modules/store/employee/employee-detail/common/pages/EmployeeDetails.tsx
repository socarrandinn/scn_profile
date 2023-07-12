import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import EmployeeDetailContainer from 'modules/store/employee/employee-detail/common/containers/EmployeeDetailContainer';

const EmployeeDetails = () => {
  return (
        <PageLayout>
            <EmployeeDetailContainer/>
        </PageLayout>
  );
};

export default memo(EmployeeDetails);
