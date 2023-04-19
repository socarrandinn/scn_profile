import { memo } from 'react';
import { UserGeneralInfo } from 'modules/account/components/UserGeneralInfo';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const AccountGeneral = ({ isAccount }: { isAccount?: boolean }) => {
  return (
    <PaperTabView firsts>
      <UserGeneralInfo />
    </PaperTabView>
  );
};

export default memo(AccountGeneral);
