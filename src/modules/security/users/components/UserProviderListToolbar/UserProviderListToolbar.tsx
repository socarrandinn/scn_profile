import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { useToggle } from '@dfl/hook-utils';
import UserProviderCreateModal from '../../containers/UserProviderCreateModal';

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
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>
      <GeneralActions>
        <AddButton action={onOpen} />
      </GeneralActions>

      <UserProviderCreateModal open={isOpen} onClose={onClose} title='create' />
    </>
  );
};

export default memo(UserProviderListToolbar);
