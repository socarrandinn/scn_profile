import { memo } from 'react';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import useAccountUpdateForm from 'modules/account/hooks/useAccountUpdateForm';
import { UserGeneralInfo } from 'modules/security/users/components/UserGeneralInfo';
import { useUserDetail } from 'modules/account/contexts/UserDetail';

const AccountGeneral = () => {
  const { isLoading } = useUserDetail();
  const form = useAccountUpdateForm();

  return (
    <PaperTabView firsts>
      <UserGeneralInfo {...form} isLoadingUser={isLoading} />
    </PaperTabView>
  );
};

export default memo(AccountGeneral);
