import { useToggle } from '@dfl/hook-utils';
import { AddButton } from '@dfl/mui-admin-layout';
import { Send } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { ProviderUserInvitationModal } from '../../containers/ProviderUserInvitationModal';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

const InviteUser = () => {
  const { t } = useTranslation('users');
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (<>
    <AddButton action={onOpen} startIcon={<Send />}>
      {t('inviteUser')}
    </AddButton>
    <ProviderUserInvitationModal open={isOpen} onClose={onClose} />
  </>
  );
};

export default InviteUser;
