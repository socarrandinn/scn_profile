import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

const ExpressDeliveryListToolbar = () => {
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
        {/* <PermissionCheck permissions={EXPRESS_DELIVERY_PERMISSIONS.EXPRESS_DELIVERY_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck> */}
      </GeneralActions>
    </>
  );
};

export default memo(ExpressDeliveryListToolbar);
