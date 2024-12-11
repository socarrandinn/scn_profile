import { memo } from 'react';
import { UserGeneralInfo } from 'modules/security/users/components/UserGeneralInfo';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const UserGeneral = () => {
  return (
    <PaperTabView firsts>
      <UserGeneralInfo />
    </PaperTabView>
  );
};

export default memo(UserGeneral);
