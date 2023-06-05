import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import AdvertisementCreateModal from 'modules/rrhh/advertisement/containers/AdvertisementCreateModal';
import { ADVERTISEMENTS_PERMISSIONS } from 'modules/rrhh/advertisement/constants/advertisement.permissions';
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

const AdvertisementListToolbar = () => {
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
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={ADVERTISEMENTS_PERMISSIONS.WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <AdvertisementCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(AdvertisementListToolbar);
