import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import JobPositionCreateModal from 'modules/rrhh/settings/job-position/containers/JobPositionCreateModal';
import { useSecurity } from '@dfl/react-security';
import { JOB_POSITION_PERMISSIONS } from 'modules/rrhh/settings/job-position/constants/job-position.permissions';
// import { useDeleteManyJobPositions } from 'modules/rrhh/settings/job-position/hooks/useDeleteManyJobPositions';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { hasPermission } = useSecurity();
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        createAction: onOpen,
        create: hasPermission(JOB_POSITION_PERMISSIONS.JOB_POSITION_WRITE),
        export: false,
      },
    };
  }, [onOpen, hasPermission]);

  return {
    isOpen,
    onClose,
    settings,
  };
};

const JobPositionListToolbar = () => {
  const { isOpen, settings, onClose } = useToolbarSetting();
  // const { mutate, isLoading } = useDeleteManyJobPositions();

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
            <JobPositionCreateModal open={isOpen} onClose={onClose}/>
        </>
  );
};

export default memo(JobPositionListToolbar);
