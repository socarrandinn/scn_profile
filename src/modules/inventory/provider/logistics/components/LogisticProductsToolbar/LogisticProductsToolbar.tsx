import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';
import { TableToolbar, ExportButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { GeneralActions } from 'layouts/portals';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useDeleteManyLogisticsProducts } from 'modules/inventory/provider/logistics/hooks/useDeleteManyLogisticsProducts';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultSupplierProductTabFilters } from 'modules/inventory/product/constants';
import { ExcludeFilterMenu } from 'components/libs/table/toolbar/FilterSelected/ExcludeFilterMenu';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const ToolbarSettings = () => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate('create');
  }, [navigate]);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultSupplierProductTabFilters),
      },
    };
  }, []);

  return {
    onOpen,
    settings,
  };
};

const LogisticProductsToolbar = () => {
  const { settings } = ToolbarSettings();
  const { mutate, isLoading } = useDeleteManyLogisticsProducts();
  const { isLoading: isLoadingLogistic } = useLogisticsDetailContext();

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
        {!isLoadingLogistic && (
          <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_VIEW}>
            <ExportButton disabled />
            <ExcludeFilterMenu />
          </PermissionCheck>
        )}
      </GeneralActions>
    </>
  );
};

export default memo(LogisticProductsToolbar);
