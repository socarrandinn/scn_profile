import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants/home-delivery.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';

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

const HomeDeliveryListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

  return (
        <>
            <TableToolbar
                selectActions={
                    <Stack direction={'row'} spacing={1}>
                        {/* <DeleteRowAction isLoading={isLoading} onDelete={mutate} /> */}
                    </Stack>
                }
            >
                <TableToolbarActions settings={settings}/>
            </TableToolbar>
            <GeneralActions>
                <PermissionCheck permissions={HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions>
            <HomeDeliveryCreateModal open={isOpen} onClose={onClose}/>
        </>
  );
};

export default memo(HomeDeliveryListToolbar);
