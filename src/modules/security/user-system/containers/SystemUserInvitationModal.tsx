import UserInvitationModal from 'modules/security/users/containers/UserInvitationModal';
import { userInvitationSchema } from 'modules/security/users/schemas/user.schema';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

type UserCreateModalProps = {
  open: boolean;
  onClose: () => void;
};

export const SystemUserInvitationModal = ({
  open,
  onClose,
}: UserCreateModalProps) => {
  return (
    <UserInvitationModal
      open={open}
      onClose={onClose}
      apiPath={'/admin/invite'}
      validationScheme={userInvitationSchema}
      queryKey={''}
      redirect={'/security/system-users/user'}
      rolesType={ROLE_TYPE_ENUM.ROOT}
    />
  );
};
