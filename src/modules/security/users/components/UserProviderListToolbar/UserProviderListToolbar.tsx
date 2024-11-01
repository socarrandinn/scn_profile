import { memo } from 'react';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { useToggle } from '@dfl/hook-utils';
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

const UserProviderListToolbar = () => {
  const { onOpen } = useToggle(false);

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>
      <GeneralActions>
        <AddButton action={onOpen} />
      </GeneralActions>

      {/*  <UserInviteCreateModal open={isOpen} onClose={onClose} title='create' /> */}
    </>
  );
};

export default memo(UserProviderListToolbar);
