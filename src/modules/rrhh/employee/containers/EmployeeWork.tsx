import { memo } from 'react';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const EmployeeWork = ({ isAccount }: { isAccount?: boolean }) => {
  return (
    <PaperTabView firsts>
        EmployeeWork
    </PaperTabView>
  );
};

export default memo(EmployeeWork);
