import { memo } from 'react';
import { UserGeneralInfo } from 'modules/security/users/components/UserGeneralInfo';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import useUserUpdateForm from 'modules/security/users/hooks/useUserUpdateForm';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';

const UserGeneral = () => {
  const { user, isLoading } = useUserDetail();
  const form = useUserUpdateForm(user);

  return (
    <PaperTabView firsts>
      <UserGeneralInfo {...form} isLoadingUser={isLoading} />
    </PaperTabView>
  );
};

export default memo(UserGeneral);
