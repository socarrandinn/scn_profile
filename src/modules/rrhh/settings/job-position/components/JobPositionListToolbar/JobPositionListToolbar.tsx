import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import JobPositionCreateModal from 'modules/rrhh/settings/job-position/containers/JobPositionCreateModal';
import { useDeleteManyJobPositions } from 'modules/rrhh/settings/job-position/hooks/useDeleteManyJobPositions';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        createAction: onOpen,
        export: true,
      },
    };
  }, [onOpen]);

  return {
    isOpen,
    onClose,
    settings,
  };
};

const JobPositionListToolbar = () => {
  const { isOpen, settings, onClose } = useToolbarSetting();
  const { mutate, isLoading } = useDeleteManyJobPositions();

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
      <JobPositionCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(JobPositionListToolbar);
