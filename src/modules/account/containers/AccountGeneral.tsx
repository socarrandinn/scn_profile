import { memo } from 'react';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import useAccountUpdateForm from 'modules/account/hooks/useAccountUpdateForm';
import { UserGeneralInfo } from 'modules/security/users/components/UserGeneralInfo';
import { useAccountDetail } from 'modules/account/contexts/AccountDetail';

const AccountGeneral = () => {
  const { isLoading } = useAccountDetail();
  const form = useAccountUpdateForm();

  return (
    <PaperTabView firsts>
      <UserGeneralInfo {...form} isLoadingUser={isLoading} />
    </PaperTabView>
  );
};

export default memo(AccountGeneral);
