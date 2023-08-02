import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import JobPositionCreateModal from 'modules/store/product/settings/job-position/containers/JobPositionCreateModal';
import { JOB_POSITION_PERMISSIONS } from 'modules/store/product/settings/job-position/constants/job-position.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
// import { useDeleteManyJobPositions } from 'modules/store/product/settings/job-position/hooks/useDeleteManyJobPositions';

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

const JobPositionListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();
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
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={JOB_POSITION_PERMISSIONS.JOB_POSITION_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <JobPositionCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(JobPositionListToolbar);
