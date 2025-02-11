import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import BannerCreateModal from 'modules/cms/banners/containers/BannerElementCreateModal';
import { GeneralActions } from 'layouts/portals';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TablaHeaderOptions>(() => {
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

const BannerListToolbar = () => {
  const { isOpen, settings, onClose } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        {/*   <PermissionCheck permissions={BANNER_PERMISSIONS.BANNER_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck> */}
      </GeneralActions>
      <BannerCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(BannerListToolbar);
