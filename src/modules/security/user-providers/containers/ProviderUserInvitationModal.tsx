import { SelectProviderAndType } from 'modules/security/users/components/SelectProviderAndType';
import UserInvitationModal from 'modules/security/users/containers/UserInvitationModal';
import { userProviderInvitationSchema } from 'modules/security/users/schemas/user.schema';

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
      validationScheme={userProviderInvitationSchema}
      queryKey={''}
      redirect={'/security/provider-users/user'}
    >
      <SelectProviderAndType />
    </UserInvitationModal>
  );
};
