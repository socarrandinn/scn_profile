import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import ReasonForJobChangeCreateModal from 'modules/inventory/product/settings/reason-for-job-change/containers/ReasonForJobChangeCreateModal';
import { REASON_FOR_JOB_CHANGE_PERMISSIONS } from 'modules/inventory/product/settings/reason-for-job-change/constants/reason-for-job-change.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
// import { useDeleteManyReasonForJobChanges } from 'modules/inventory/product/settings/reason-for-job-change/hooks/useDeleteManyReasonForJobChanges';

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

const ReasonForJobChangeListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();
  // const { mutate, isLoading } = useDeleteManyReasonForJobChanges();

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
        <PermissionCheck permissions={REASON_FOR_JOB_CHANGE_PERMISSIONS.REASON_FOR_JOB_CHANGE_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <ReasonForJobChangeCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ReasonForJobChangeListToolbar);
