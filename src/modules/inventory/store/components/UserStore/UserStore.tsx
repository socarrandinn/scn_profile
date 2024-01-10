import { memo } from 'react';
import { UserList } from 'modules/security/users/pages';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';

const UserStore = () => {
  return (
    <PaperTabView firsts>
      <UserList />
    </PaperTabView>
  )
}

export default memo(UserStore);
