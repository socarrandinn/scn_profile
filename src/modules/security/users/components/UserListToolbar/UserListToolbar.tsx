import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import UserCreateModal from 'modules/security/users/containers/UserCreateModal';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

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

const UserListToolbar = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>
      <GeneralActions>
        <AddButton action={onOpen} />
      </GeneralActions>

      <UserCreateModal open={isOpen} onClose={onClose} title='create' />
    </>
  );
};

export default memo(UserListToolbar);
