import { memo } from 'react';
import { EmployeeGeneralInfo } from 'modules/rrhh/employee/components/EmployeeGeneralInfo';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const AccountGeneral = ({ isAccount }: { isAccount?: boolean }) => {
  return (
      <EmployeeGeneralInfo />
  );
};

export default memo(AccountGeneral);
