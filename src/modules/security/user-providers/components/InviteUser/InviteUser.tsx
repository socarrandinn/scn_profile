import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { Send } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import UserInvitationModal from 'modules/security/users/containers/UserInvitationModal';
import { userProviderSchema } from 'modules/security/users/schemas/user.schema';
import { SelectProviderAndType } from 'modules/security/users/components/SelectProviderAndType';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { USERS_INVITATION_LIST_KEY } from 'modules/security/users/constants/queries';

const InviteUser = () => {
  const { t } = useTranslation('users');
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (<>
    <AddButton action={onOpen} startIcon={<Send />}>
      {t('inviteUser')}
    </AddButton>
    <UserInvitationModal
      open={isOpen}
      onClose={onClose}
      apiPath={'/providers/invite'}
      validationScheme={userProviderSchema}
      queryKey={USERS_INVITATION_LIST_KEY}
      redirect={'/security/users/user'}
      rolesType={ROLE_TYPE_ENUM.PROVIDER}
    >
      <SelectProviderAndType />
    </UserInvitationModal>
  </>
  );
};

export default InviteUser;
