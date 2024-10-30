import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import LogisticAddUserInviteModal from 'modules/inventory/provider/logistics/containers/LogisticAddUserInviteModal';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: true,
  },
  actions: {
    export: false,
    create: false,
  },
};

type ProviderUsersInviteToolbarProps = {
  permissions: string[];
};
const ProviderUsersInviteToolbar = ({ permissions }: ProviderUsersInviteToolbarProps) => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { isLoading } = useLogisticsDetailContext();

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        {!isLoading && (
          <PermissionCheck permissions={permissions}>
            <AddButton action={onOpen} />
          </PermissionCheck>
        )}
      </GeneralActions>
      <LogisticAddUserInviteModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProviderUsersInviteToolbar);
