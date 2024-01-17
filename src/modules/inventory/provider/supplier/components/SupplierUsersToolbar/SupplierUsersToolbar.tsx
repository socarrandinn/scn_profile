import { memo } from 'react';
// import { useNavigate } from 'react-router';
// import { Stack } from '@mui/material';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
// import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import { CreateSupplierUserModal } from '../CreateSupplierUserModal';
// import { STORE_PERMISSIONS } from 'modules/inventory/store/constants';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: true,
  },
  actions: {
    export: false,
    create: false,
  },
};

const StoreListToolbar = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        {/* <PermissionCheck permissions={STORE_PERMISSIONS.STORE_WRITE}> */}
          <AddButton action={onOpen} />
        {/* </PermissionCheck> */}
      </GeneralActions>

      <CreateSupplierUserModal open={isOpen} onClose={onClose} title='create' />
    </>
  );
};

export default memo(StoreListToolbar);
