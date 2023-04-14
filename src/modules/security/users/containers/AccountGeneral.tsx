import { memo } from 'react';
import { UserGeneralInfo } from 'modules/security/users/components/UserGeneralInfo';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
// import AccountSecurity from "modules/users/containers/AccountSecurity";

const AccountGeneral = ({ isAccount }: { isAccount?: boolean }) => {
  return (
    <PaperTabView firsts>
      <UserGeneralInfo />
    </PaperTabView>
  );
};

export default memo(AccountGeneral);
