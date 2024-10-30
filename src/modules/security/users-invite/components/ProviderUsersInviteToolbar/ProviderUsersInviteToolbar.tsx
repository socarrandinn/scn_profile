import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import ProviderAddUserInviteModal from './ProviderAddUserInviteModal';

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
  atLessOne?: boolean;
};
const ProviderUsersInviteToolbar = ({ permissions, atLessOne = false }: ProviderUsersInviteToolbarProps) => {
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={permissions} atLessOne={atLessOne}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <ProviderAddUserInviteModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProviderUsersInviteToolbar);
