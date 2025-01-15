import { SelectProviderAndType } from 'modules/security/users/components/SelectProviderAndType';
import UserInvitationModal from 'modules/security/users/containers/UserInvitationModal';
import { userProviderSchema } from 'modules/security/users/schemas/user.schema';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

type UserCreateModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ProviderUserInvitationModal = ({
  open,
  onClose,
}: UserCreateModalProps) => {
  return (
    <UserInvitationModal
      open={open}
      onClose={onClose}
      apiPath={'/providers/invite'}
      validationScheme={userProviderSchema}
      queryKey={''}
      redirect={'/security/provider-users/user'}
      rolesType={ROLE_TYPE_ENUM.PROVIDER}
    >
      <SelectProviderAndType />
    </UserInvitationModal>
  );
};
