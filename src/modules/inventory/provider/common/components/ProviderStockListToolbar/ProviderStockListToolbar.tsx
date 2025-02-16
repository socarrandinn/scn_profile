import { TableToolbar } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { Stack } from '@mui/material';
import ChangeManyStatusButton from 'components/Actions/VisibilityAction/ChangeManyStatusButton';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { VISIBILITY_STATUS } from 'modules/inventory/common/constants/visibility-status';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { defaultWarehouseProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import { useVisibilityManyWarehouseStock } from 'modules/inventory/warehouse/hooks/useVisibilityManWarehouseStock';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getDefaultFilterKeys } from 'utils/custom-filters';


const ProviderStockListToolbar = ({ warehouseId }: { warehouseId: string }) => {
  const { t } = useTranslation('product');
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
    </>
  );
};

export default memo(ProviderStockListToolbar);
