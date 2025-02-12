import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';
import { PermissionCheck } from '@dfl/react-security';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      search: {
        disabled: true,
      },
      filter: {
        activeMenu: false,
      },
    };
  }, []);

  return {
    settings,
  };
};

const StockActivityToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <>
      <TableToolbar
        selectActions={
          <PermissionCheck permissions={WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE}>
            <Stack direction={'row'} spacing={1}></Stack>
          </PermissionCheck>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      {/*  <GeneralActions>
        <PermissionCheck permissions={WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE}>
          {!logisticProviderId && <WarehouseExportButton {...rest} />}
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions> */}
    </>
  );
};

export default memo(StockActivityToolbar);
