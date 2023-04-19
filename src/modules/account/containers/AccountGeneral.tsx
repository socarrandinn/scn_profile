import { memo } from 'react';
import { UserGeneralInfo } from 'modules/account/components/UserGeneralInfo';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const AccountGeneral = () => {
  return (
    <PaperTabView firsts>
      <UserGeneralInfo />
    </PaperTabView>
  );
};

export default memo(AccountGeneral);
