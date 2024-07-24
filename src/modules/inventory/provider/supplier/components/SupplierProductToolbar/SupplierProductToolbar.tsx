import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, ExportButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { GeneralActions } from 'layouts/portals';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';

const SupplierProductToolbar = () => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate('create');
  }, [navigate]);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
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
            <ExportButton />
          </PermissionCheck>
        )}
      </GeneralActions>
    </>
  );
};

export default memo(StoreListToolbar);
