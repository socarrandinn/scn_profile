import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultSupplierStoreProductFilters } from 'modules/inventory/product/constants';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { ExcludeFilterMenu } from 'components/libs/table/toolbar/FilterSelected/ExcludeFilterMenu';

const useToolbarSetting = () => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate('create');
  }, [navigate]);

  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultSupplierStoreProductFilters),
      },
    };
  }, []);

  return {
    onOpen,
    settings,
  };
};

const ProductStoreListToolbar = () => {
  const { settings, onOpen } = useToolbarSetting();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            {/* <DeleteRowAction isLoading={isLoading} onDelete={mutate} /> */}
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE}>
          <AddButton action={onOpen} />
          <ExcludeFilterMenu />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(ProductStoreListToolbar);
