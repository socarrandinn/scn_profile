import { memo } from 'react';
import { EmployeeAddressInfo } from 'modules/rrhh/employee/components/EmployeeAddressInfo';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const AccountGeneral = ({ isAccount }: { isAccount?: boolean }) => {
  return (
    <PaperTabView firsts>
      <EmployeeAddressInfo />
    </PaperTabView>
  );
};

export default memo(AccountGeneral);
