import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants/logistics.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import {
  LogisticBulkDeleteButton,
  LogisticBulkUpdateHandlingCostButton,
} from 'modules/inventory/provider/logistics/components/LogisticBulkActions';

const useToolbarSetting = () => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate('create');
  }, [navigate]);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, []);

  return {
    onOpen,
    settings,
  };
};

const LogisticsListToolbar = () => {
  const { settings, onOpen } = useToolbarSetting();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <LogisticBulkUpdateHandlingCostButton />
            <LogisticBulkDeleteButton />
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(LogisticsListToolbar);
