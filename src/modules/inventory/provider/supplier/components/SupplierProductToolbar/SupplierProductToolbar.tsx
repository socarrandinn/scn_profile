import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';
import { TableToolbar, ExportButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { GeneralActions } from 'layouts/portals';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultSupplierProductTabFilters } from 'modules/inventory/product/constants';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const SupplierProductToolbar = () => {
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
        defaultFilterKeys: getDefaultFilterKeys(defaultSupplierProductTabFilters),
      },
    };
  }, []);

  return {
    onOpen,
    settings,
  };
};

const StoreListToolbar = () => {
  const { settings } = SupplierProductToolbar();
  const { isLoading } = useProviderProductsDetail();

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
        {!isLoading && (
          <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_VIEW}>
            <ExportButton disabled />
          </PermissionCheck>
        )}
      </GeneralActions>
    </>
  );
};

export default memo(StoreListToolbar);
