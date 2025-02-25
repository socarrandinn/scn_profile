import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table';
import { GeneralActions } from 'layouts/portals';
import { MEDIA_PERMISSIONS } from 'modules/cms/medias/constants/medias.permissions';
import { PermissionCheck } from '@dfl/react-security';
import MediaCreateModal from 'modules/cms/medias/containers/MediaCreateModal';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

const MediaToolbar = () => {
  const { settings, onOpen, isOpen, onClose } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions>
        <PermissionCheck permissions={MEDIA_PERMISSIONS.MEDIA_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <MediaCreateModal onClose={onClose} open={isOpen} />
    </>
  );
};

export default memo(MediaToolbar);
