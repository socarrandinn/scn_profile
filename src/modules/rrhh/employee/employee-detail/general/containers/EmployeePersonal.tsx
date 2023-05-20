import { memo } from 'react';
import { EmployeeGeneralInfo } from 'modules/rrhh/employee/employee-detail/general/components/EmployeeGeneralInfo';

const AccountGeneral = ({ isAccount }: { isAccount?: boolean }) => {
  return <EmployeeGeneralInfo />;
};

export default memo(AccountGeneral);
