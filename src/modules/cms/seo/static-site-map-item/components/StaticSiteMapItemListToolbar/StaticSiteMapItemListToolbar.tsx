import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import StaticSiteMapItemCreateModal from 'modules/cms/seo/static-site-map-item/containers/StaticSiteMapItemCreateModal';
import { STATIC_SITE_MAP_ITEM_PERMISSIONS } from 'modules/cms/seo/static-site-map-item/constants/static-site-map-item.permissions';
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

const StaticSiteMapItemListToolbar = () => {
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
                <PermissionCheck permissions={STATIC_SITE_MAP_ITEM_PERMISSIONS.STATIC_SITE_MAP_ITEM_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions>
            <StaticSiteMapItemCreateModal open={isOpen} onClose={onClose}/>
        </>
  );
};

export default memo(StaticSiteMapItemListToolbar);
