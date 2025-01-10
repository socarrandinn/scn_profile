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
import { ChildrenProps } from '@dfl/mui-react-common';

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

const UserListToolbar = ({ children }: ChildrenProps) => {
  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>
      <GeneralActions>
        {children}
      </GeneralActions>
    </>
  );
};

export default memo(UserListToolbar);
