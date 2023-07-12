import { memo } from 'react';
import { EmployeeGeneralInfo } from 'modules/store/employee/employee-detail/general/components/EmployeeGeneralInfo';

const AccountGeneral = ({ isAccount }: { isAccount?: boolean }) => {
  return <EmployeeGeneralInfo />;
};

export default memo(AccountGeneral);
