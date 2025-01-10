import UserInvitationModal from 'modules/security/users/containers/UserInvitationModal';
import { userInvitationSchema } from 'modules/security/users/schemas/user.schema';

type UserCreateModalProps = {
  open: boolean;
  onClose: () => void;
};

export const SystemUserInvitationModal = ({
  open,
  onClose,
}: UserCreateModalProps) => {
  return (<UserInvitationModal open={open} onClose={onClose} apiPath={'/admin/invite'}
                               validationScheme={userInvitationSchema} queryKey={''}
                               redirect={'/security/system-users/user'}
    />
  );
};
