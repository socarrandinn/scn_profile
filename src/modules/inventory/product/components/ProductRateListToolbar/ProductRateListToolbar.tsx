import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { useNavigate } from 'react-router';

const defaultSettings: TablaHeaderOptions = {
  actions: {
    create: false,
    export: false,
  },
  search: {
    disabled: true,
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

const ProductRateListToolbar = () => {
  const { settings } = useToolbarSetting();

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
        {/* <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
          <ImportButton />
          <ProductExportButton />
          <AddButton action={handleAddAction} />
        </PermissionCheck> */}
      </GeneralActions>
    </>
  );
};

export default memo(ProductRateListToolbar);
