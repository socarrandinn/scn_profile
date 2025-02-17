import { memo, useMemo } from 'react';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { defaultWarehouseProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { PermissionCheck } from '@dfl/react-security';
import { WarehouseProductExportButton } from 'modules/export/components/modules/inventory/WarehouseProductExportButton';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { StockWarehouseAction, StockWarehouseImportAction } from 'modules/inventory/product-stock/components/StockWarehouseAction';
import { PRODUCT_PERMISSIONS } from '../../constants';
import { Stack } from '@mui/material';
import ChangeManyStatusButton from 'components/Actions/VisibilityAction/ChangeManyStatusButton';
import { VISIBILITY_STATUS } from 'modules/inventory/common/constants/visibility-status';
import { useTranslation } from 'react-i18next';
import { useVisibilityManyWarehouseStock } from 'modules/inventory/warehouse/hooks/useVisibilityManWarehouseStock';

type StoreProductListToolbarProps = {
  search?: any;
  filters: any;
  total: number | undefined;
};

const StoreProductListToolbar = ({ ...props }: StoreProductListToolbarProps) => {
  const { t } = useTranslation('product');
  const { warehouseId, warehouse } = useWarehouseDetail();
  const visibility = useVisibilityManyWarehouseStock(warehouseId);

  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultWarehouseProductsFilters),
      },
    };
  }, []);

  return (
    <>
      <TableToolbar
        selectActions={
          <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE || STOCK_PERMISSIONS.WRITE}>
            <Stack
              direction={'row'}
              gap={1}
              justifyContent={{ xs: 'end', md: 'start' }}
              flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            >
              <ChangeManyStatusButton
                isLoading={visibility.isLoading}
                onChange={visibility.mutateAsync}
                title={t('common:visibilityMany')}
                options={VISIBILITY_STATUS?.map((s) => ({ ...s, title: t(s?.title) }))}
                reset={visibility.reset}
                confirmation={t('product:confirm.visibilityMany')}
              />
            </Stack>
          </PermissionCheck>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions>
        <WarehouseProductExportButton {...props} warehouseId={warehouseId} name={warehouse?.name ?? 'warehouse'} />
        <PermissionCheck permissions={[STOCK_PERMISSIONS.WRITE]}>
          <StockWarehouseImportAction />
          <StockWarehouseAction />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(StoreProductListToolbar);
