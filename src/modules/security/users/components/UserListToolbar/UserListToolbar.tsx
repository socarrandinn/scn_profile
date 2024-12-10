import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import UserCreateModal from 'modules/security/users/containers/UserCreateModal';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from 'react-i18next';
import UserInvitationModal from 'modules/security/users/containers/UserInvitationModal';

const settings: TableHeaderOptions = {
  filter: {
    disabled: true,
    activeMenu: false,
  },
  actions: {
    export: false,
    create: false,
  },
};

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
      <UserInvitationModal open={isOpen} onClose={onClose}/>
    </>
  );
};

const UserListToolbar = () => {
  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>
      <GeneralActions>
        <AddUser />
        <InviteUser />
      </GeneralActions>
    </>
  );
};

export default memo(UserListToolbar);
