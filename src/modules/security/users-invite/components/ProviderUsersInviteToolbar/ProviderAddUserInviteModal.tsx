import { memo } from 'react';
import UserInviteCreateModal from 'modules/security/users-invite/containers/UserInviteCreateModal';
import { ICreateUserInvite, USER_INVITE_TYPE_ENUM } from 'modules/security/users-invite/interfaces';
import { initUserInviteValue } from 'modules/security/users-invite/hooks/useUsersInviteCreateForm';
import {
  providerInvitationSchema,
  providerTypeSchema,
} from 'modules/security/users-invite/schemas/users-invite.schema';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { ProviderUserInviteForm } from '../ProviderUserInviteForm';

type ProviderAddUserInviteModalProps = {
  open: boolean;
  onClose: () => void;
};

const ProviderAddUserInviteModal = ({ onClose, open }: ProviderAddUserInviteModalProps) => {
  const dataInit: ICreateUserInvite & { type: ROLE_PROVIDER_TYPE_ENUM } = {
    ...initUserInviteValue,
    provider: '',
    inviteType: USER_INVITE_TYPE_ENUM.PROVIDER,
    type: ROLE_PROVIDER_TYPE_ENUM.LOGISTIC,
  };

  return (
    <UserInviteCreateModal
      title={'common:inviteUser'}
      open={open}
      onClose={onClose}
      initValue={dataInit}
      Form={ProviderUserInviteForm}
      schema={providerInvitationSchema.concat(providerTypeSchema)}
    />
  );
};

export default memo(ProviderAddUserInviteModal);
