import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import { WAREHOUSE_PERMISSIONS } from '../../constants';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import WarehouseAddUserInviteModal from '../../containers/WarehouseAddUserInviteModal';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: false,
  },
  actions: {
    export: false,
    create: false,
  },
};

const WarehouseUserListToolbar = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { isLoading } = useWarehouseDetail();

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        {!isLoading && (
          <PermissionCheck permissions={WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE}>
            <AddButton action={onOpen} />
          </PermissionCheck>
        )}
      </GeneralActions>

      <WarehouseAddUserInviteModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(WarehouseUserListToolbar);
