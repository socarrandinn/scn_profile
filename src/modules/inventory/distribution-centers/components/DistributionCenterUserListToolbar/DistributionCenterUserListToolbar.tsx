import { memo } from 'react';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import { DISTRIBUTION_CENTER_PERMISSIONS } from '../../constants';
import DistributionCenterAddUserInviteModal from '../../containers/DistributionCenterAddUserInviteModal';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const settings: TableHeaderOptions = {
  filter: {
    disabled: false,
    activeMenu: true,
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
          <PermissionCheck permissions={DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE}>
            <AddButton action={onOpen} />
          </PermissionCheck>
        )}
      </GeneralActions>

      <DistributionCenterAddUserInviteModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(DistributionCenterUserListToolbar);
