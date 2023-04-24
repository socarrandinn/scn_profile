import { memo } from 'react';
import { EmployeeContactsInfo } from 'modules/rrhh/employee/components/EmployeeContactsInfo';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const EmployeeContacts = ({ isAccount }: { isAccount?: boolean }) => {
  return (
    <PaperTabView firsts>
      <EmployeeContactsInfo />
    </PaperTabView>
  );
};

export default memo(EmployeeContacts);
