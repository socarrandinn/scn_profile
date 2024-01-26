import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, [onOpen]);

  return {
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

const ClientsListToolbar = () => {
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
      {/* <GeneralActions>
                <PermissionCheck permissions={CLIENTS_PERMISSIONS.CLIENTS_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions>
            <ClientsCreateModal open={isOpen} onClose={onClose}/> */}
    </>
  );
};

export default memo(ClientsListToolbar);
