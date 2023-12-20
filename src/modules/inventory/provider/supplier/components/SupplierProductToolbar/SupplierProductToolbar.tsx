import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';

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
  }, [onOpen]);

  return {
    onOpen,
    settings,
  };
};

const StoreListToolbar = () => {
  const { settings } = SupplierProductToolbar();

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
      {/*  <GeneralActions>
                <PermissionCheck permissions={STORE_PERMISSIONS.STORE_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions> */}
    </>
  );
};

export default memo(StoreListToolbar);
