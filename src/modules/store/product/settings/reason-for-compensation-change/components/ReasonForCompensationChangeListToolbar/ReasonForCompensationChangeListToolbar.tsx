import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import ReasonForCompensationChangeCreateModal from 'modules/store/product/settings/reason-for-compensation-change/containers/ReasonForCompensationChangeCreateModal';
import { REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS } from 'modules/store/product/settings/reason-for-compensation-change/constants/reason-for-compensation-change.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
// import { useDeleteManyReasonForCompensationChanges } from 'modules/store/product/settings/reason-for-compensation-change/hooks/useDeleteManyReasonForCompensationChanges';

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

const ReasonForCompensationChangeListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();
  // const { mutate, isLoading } = useDeleteManyReasonForCompensationChanges();

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
        <PermissionCheck permissions={REASON_FOR_COMPENSATION_CHANGE_PERMISSIONS.REASON_FOR_COMPENSATION_CHANGE_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <ReasonForCompensationChangeCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ReasonForCompensationChangeListToolbar);
