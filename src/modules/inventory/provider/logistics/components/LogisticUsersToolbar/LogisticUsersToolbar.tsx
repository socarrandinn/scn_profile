import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import LogisticAddUserInviteModal from '../../containers/LogisticAddUserInviteModal';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import { LOGISTICS_PERMISSIONS } from '../../constants';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: true,
  },
  actions: {
    export: false,
    create: false,
  },
};

const LogisticUsersToolbar = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { isLoading } = useLogisticsDetailContext();

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        {!isLoading && (
          <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}>
            <AddButton action={onOpen} />
          </PermissionCheck>
        )}
      </GeneralActions>

      <LogisticAddUserInviteModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(LogisticUsersToolbar);
