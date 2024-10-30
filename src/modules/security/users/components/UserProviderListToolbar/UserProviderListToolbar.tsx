import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { useToggle } from '@dfl/hook-utils';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: true,
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
