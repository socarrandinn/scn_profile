import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import OrderStatusCreateModal from 'modules/sales/settings/order-status/containers/OrderStatusCreateModal';
import { ORDER_STATUS_PERMISSIONS } from 'modules/sales/settings/order-status/constants/order-status.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import UpdateManyTrackingStatusesContainer from '../../containers/UpdateManyTrackingStatusesContainer';

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

const OrderStatusListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

  return (
        <>
            <TableToolbar
                selectActions={
                    <Stack direction={'row'} spacing={1}>
                      <UpdateManyTrackingStatusesContainer/>
                      {/* <DeleteManyStatuses/> */}
                    </Stack>
                }
            >
                <TableToolbarActions settings={settings}/>
            </TableToolbar>
            <GeneralActions>
                <PermissionCheck permissions={ORDER_STATUS_PERMISSIONS.ORDER_STATUS_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions>
            <OrderStatusCreateModal open={isOpen} onClose={onClose}/>
        </>
  );
};

export default memo(OrderStatusListToolbar);
