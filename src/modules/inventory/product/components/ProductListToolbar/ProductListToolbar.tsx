import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import {
  TableToolbar,
  TableToolbarActions,
  TablaHeaderOptions,
  AddButton,
  ImportButton,
} from '@dfl/mui-admin-layout';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants/product.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import { ProductExportButton } from '../ProductExportButton';

const defaultSettings: TablaHeaderOptions = {
  actions: {
    create: false,
    export: false,
  },
};
const useToolbarSetting = () => {
  const navigate = useNavigate();
  const handleAddAction = useCallback(() => {
    navigate('create');
  }, [navigate]);

  return {
    handleAddAction,
    settings: defaultSettings,
  };
};

const ProductListToolbar = () => {
  const { settings, handleAddAction } = useToolbarSetting();

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
        <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
          <ImportButton />
          <ProductExportButton />
          <AddButton action={handleAddAction} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(ProductListToolbar);
