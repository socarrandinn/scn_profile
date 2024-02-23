import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import CausesIncidenceCreateModal from 'modules/sales/settings/causes-incidence/containers/CausesIncidenceCreateModal';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants/causes-incidence.permissions';
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

const CausesIncidenceListToolbar = () => {
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
                <PermissionCheck permissions={CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions>
            <CausesIncidenceCreateModal open={isOpen} onClose={onClose}/>
        </>
  );
};

export default memo(CausesIncidenceListToolbar);
