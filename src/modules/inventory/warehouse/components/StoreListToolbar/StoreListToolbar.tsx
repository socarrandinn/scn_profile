import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import { logisticSearchParam } from 'modules/inventory/warehouse/constants';

type Props = {
  createPath?: string;
};

const useToolbarSetting = ({ createPath = 'create' }: Props) => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate(createPath);
  }, [createPath, navigate]);
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

type ToolbarProps = {
  logisticProviderId?: string;
};

const StoreListToolbar = ({ logisticProviderId }: ToolbarProps) => {
  const { settings, onOpen } = useToolbarSetting({
    createPath: logisticProviderId ? `create?${logisticSearchParam}=${logisticProviderId}` : undefined,
  });

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
        <PermissionCheck permissions={WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(StoreListToolbar);
