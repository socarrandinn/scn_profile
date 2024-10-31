import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import { DISTRIBUTION_CENTERS_PERMISSIONS } from '../../constants';
import DistributionCenterAddUserInviteModal from '../../containers/DistributionCenterAddUserInviteModal';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: false,
  },
  actions: {
    export: false,
    create: false,
  },
};

const DistributionCenterUserListToolbar = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { isLoading } = useDistributionCenterDetail();

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        {!isLoading && (
          <PermissionCheck permissions={DISTRIBUTION_CENTERS_PERMISSIONS.DISTRIBUTION_CENTERS_WRITE}>
            <AddButton action={onOpen} />
          </PermissionCheck>
        )}
      </GeneralActions>

      <DistributionCenterAddUserInviteModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(DistributionCenterUserListToolbar);
