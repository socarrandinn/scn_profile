import { memo } from 'react';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';
import { ProvidersUsers } from 'modules/security/user-providers/components/ProvidersUsers';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { AddUser } from 'modules/security/user-providers/components/AddUser';
import { InviteUser } from 'modules/security/user-providers/components/InviteUser';

const ProviderUsersContainer = ({ path, provider }: { path: string, provider?: string }) => {
  return (
    <UserListContainer
      path={path}
      columns={userProviderColumns}
      listComponent={ProvidersUsers}
      userType={SPACE_TYPE.PROVIDER}
    >
      <AddUser provider={provider} />
      <InviteUser provider={provider} />
    </UserListContainer>
  );
};

export default memo(ProviderUsersContainer);
