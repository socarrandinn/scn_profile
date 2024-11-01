import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { DISTRIBUTION_CENTERS_PERMISSIONS } from '../../constants';
import { useToggle } from '@dfl/hook-utils';
import DistributionCentersWarehouseAddModal from '../../containers/DistributionCentersWarehouseAddModal';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultWarehouseFilters } from 'modules/inventory/warehouse/constants';

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultWarehouseFilters),
      },
    };
  }, []);

  return {
    settings,
  };
};

const DistributionCenterWarehouseListToolbar = () => {
  const { settings } = useToolbarSetting();
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={DISTRIBUTION_CENTERS_PERMISSIONS.DISTRIBUTION_CENTERS_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <DistributionCentersWarehouseAddModal onClose={onClose} open={isOpen} title='addWarehouses' />
    </>
  );
};

export default memo(DistributionCenterWarehouseListToolbar);
