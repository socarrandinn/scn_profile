import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, ExportButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { GeneralActions } from 'layouts/portals';
import { LOGISTICS_PERMISSIONS } from '../../constants';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useDeleteManyLogisticsProducts } from '../../hooks/useDeleteManyLogisticsProducts';

const ToolbarSettings = () => {
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
  }, [onOpen]);

  return {
    onOpen,
    settings,
  };
};

const LogisticProductsToolbar = () => {
  const { settings } = ToolbarSettings();
  const { mutate, isLoading } = useDeleteManyLogisticsProducts();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}>
              <DeleteButton isLoading={isLoading} onDelete={mutate} many />
            </PermissionCheck>
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_VIEW}>
          <ExportButton />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(LogisticProductsToolbar);
