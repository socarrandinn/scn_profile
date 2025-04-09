import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { Send } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import UserInvitationModal from 'modules/security/users/containers/UserInvitationModal';
import { userProviderSchema } from 'modules/security/users/schemas/user.schema';
import { SelectProviderAndType } from 'modules/security/users/components/SelectProviderAndType';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { USERS_INVITATION_LIST_KEY } from 'modules/security/users/constants/queries';
import { useParams } from 'react-router';
import { ProviderProps } from '../AddUser/AddUser';

const InviteUser = ({ provider, providerType }: ProviderProps) => {
  const { t } = useTranslation('users');
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { id } = useParams();

  return (
    <>
      <AddButton action={onOpen} startIcon={<Send />}>
        {t('inviteUser')}
      </AddButton>
      <UserInvitationModal
        open={isOpen}
        provider={id}
        providerType={providerType}
        onClose={onClose}
        apiPath={'/providers/invite'}
        validationScheme={userProviderSchema}
        queryKey={USERS_INVITATION_LIST_KEY}
        redirect={'/security/providers-users'}
        rolesType={ROLE_TYPE_ENUM.PROVIDER}
      >
        <SelectProviderAndType provider={provider} />
      </UserInvitationModal>
    </>
  );
};

export default InviteUser;
