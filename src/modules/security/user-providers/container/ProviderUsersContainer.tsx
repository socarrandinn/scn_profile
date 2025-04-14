import { memo } from 'react';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';
import { ProvidersUsers } from 'modules/security/user-providers/components/ProvidersUsers';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { AddUser } from 'modules/security/user-providers/components/AddUser';
import { InviteUser } from 'modules/security/user-providers/components/InviteUser';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

export type UserProviderProps = {
  path: string;
  provider?: string;
  providerType?: PROVIDER_TYPE_ENUM;
};

const ProviderUsersContainer = ({ path, provider, providerType }: UserProviderProps) => {
  return (
    <UserListContainer
      path={path}
      columns={userProviderColumns}
      listComponent={ProvidersUsers}
      userType={SPACE_TYPE.PROVIDER}
    >
      <AddUser provider={provider} providerType={providerType} />
      <InviteUser
        provider={provider}
        providerType={providerType}
        redirect={path} // tab -> /users
      />
    </UserListContainer>
  );
};

export default memo(ProviderUsersContainer);
