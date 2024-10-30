import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: true,
  },
  actions: {
    export: false,
    create: false,
  },
};

const WarehouseUserListToolbar = () => {
  // const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>
      {/* <GeneralActions>
        <AddButton action={onOpen} />
      </GeneralActions>

      <UserCreateModal open={isOpen} onClose={onClose} title='create' /> */}
    </>
  );
};

export default memo(WarehouseUserListToolbar);
