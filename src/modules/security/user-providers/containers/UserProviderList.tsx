import { memo } from 'react';
import { AddButton, TableProvider } from '@dfl/mui-admin-layout';
import { filters } from 'modules/security/users/constants/filters';
import UserSystemListContainer, {
  UserSystemListContainerProps,
} from 'modules/security/users/containers/UserTableContainer';
import { useToggle } from '@dfl/hook-utils';
import UserCreateModal from 'modules/security/users/containers/UserCreateModal';
import { useTranslation } from 'react-i18next';
import SendIcon from '@mui/icons-material/Send';
import { ProviderUserInvitationModal } from 'modules/security/user-providers/containers/ProviderUserInvitationModal';

const AddUser = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (<>
      <AddButton action={onOpen} />
      <UserCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

const InviteUser = () => {
  const { t } = useTranslation('users');
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (<>
      <AddButton action={onOpen} startIcon={<SendIcon />}>
        {t('inviteUser')}
      </AddButton>
      <ProviderUserInvitationModal open={isOpen} onClose={onClose} />
    </>
  );
};
const UserProviderList = (props: UserSystemListContainerProps) => {
  return (
    <TableProvider id={'users'} filters={filters}>
      <UserSystemListContainer {...props} >
        <AddUser />
        <InviteUser />
      </UserSystemListContainer>
    </TableProvider>
  );
};

export default memo(UserProviderList);
