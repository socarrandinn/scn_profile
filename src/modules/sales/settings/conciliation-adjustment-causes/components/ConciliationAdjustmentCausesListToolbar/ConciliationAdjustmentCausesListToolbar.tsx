import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import ConciliationAdjustmentCausesCreateModal from 'modules/sales/settings/conciliation-adjustment-causes/containers/ConciliationAdjustmentCausesCreateModal';
import { CONCILIATION_ADJUSTMENT_CAUSES_PERMISSIONS } from 'modules/sales/settings/conciliation-adjustment-causes/constants/conciliation-adjustment-causes.permissions';
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

const ConciliationAdjustmentCausesListToolbar = () => {
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
                <PermissionCheck permissions={CONCILIATION_ADJUSTMENT_CAUSES_PERMISSIONS.CONCILIATION_ADJUSTMENT_CAUSES_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions>
            <ConciliationAdjustmentCausesCreateModal open={isOpen} onClose={onClose}/>
        </>
  );
};

export default memo(ConciliationAdjustmentCausesListToolbar);
