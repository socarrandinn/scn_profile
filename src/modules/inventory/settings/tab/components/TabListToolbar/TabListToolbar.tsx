import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import TabCreateModal from 'modules/inventory/settings/tab/containers/TabCreateModal';
import { TAB_PERMISSIONS } from 'modules/inventory/settings/tab/constants/tab.permissions';
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

const TabListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

  return (
        <>
            <TableToolbar
                selectActions={
                    <Stack direction={'row'} spacing={1}>
                    </Stack>
                }
            >
                <TableToolbarActions settings={settings}/>
            </TableToolbar>
            <GeneralActions>
                <PermissionCheck permissions={TAB_PERMISSIONS.TAB_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions>
            <TabCreateModal open={isOpen} onClose={onClose}/>
        </>
  );
};

export default memo(TabListToolbar);
