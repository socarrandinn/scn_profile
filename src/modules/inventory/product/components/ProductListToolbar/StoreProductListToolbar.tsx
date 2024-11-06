import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { defaultWarehouseProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import ProductWarehouseStockCreateModal from 'modules/inventory/product-stock/containers/ProductWarehouseStockCreateModal';
import { STOCK_OPERATIONS } from 'modules/inventory/product-stock/constants/stock-operations.constants';

type StoreProductListToolbarProps = {
  filters: any;
  total: number | undefined;
  localExport?: boolean;
  hideAdd?: boolean;
  warehouseId: string;
};

const StoreProductListToolbar = ({
  filters,
  total,
  localExport = false,
  warehouseId,
}: StoreProductListToolbarProps) => {
  const { isOpen, onClose, onOpen } = useToggle();

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
      /* selectActions={
          <Stack direction={'row'} spacing={1}>
            {!isProvider && <DeleteButton isLoading={isLoading} onDelete={mutate} many />}
          </Stack>
        } */
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions>
        <AddButton action={onOpen} />
        <ProductWarehouseStockCreateModal
          title='warehouse.title'
          subtitle='warehouse.subtitle'
          open={isOpen}
          onClose={onClose}
          initValue={{
            warehouse: warehouseId,
            note: '',
            operation: STOCK_OPERATIONS.ADDED,
            quantity: 1,
            product: null,
          }}
        />
      </GeneralActions>
    </>
  );
};

export default memo(StoreProductListToolbar);
