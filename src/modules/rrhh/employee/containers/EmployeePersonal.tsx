import { memo } from 'react';
import { EmployeeGeneralInfo } from 'modules/rrhh/employee/components/EmployeeGeneralInfo';

const AccountGeneral = ({ isAccount }: { isAccount?: boolean }) => {
  return (
      <EmployeeGeneralInfo />
  );
};

export default memo(AccountGeneral);
