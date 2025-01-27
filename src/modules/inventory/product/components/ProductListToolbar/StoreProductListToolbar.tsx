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
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { useTranslation } from 'react-i18next';
import { UploadFile } from '@mui/icons-material';
import ProductWarehouseImportStockCreateModal from 'modules/inventory/product-stock/containers/ProductWarehouseImportStockCreateModal';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { PermissionCheck } from '@dfl/react-security';
import { WarehouseProductExportButton } from 'modules/export/components/modules/inventory/WarehouseProductExportButton';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';

type StoreProductListToolbarProps = {
  search?: any;
  filters: any;
  total: number | undefined;
};

const StoreProductListToolbar = ({ ...props }: StoreProductListToolbarProps) => {
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

  const { warehouseId, warehouse } = useWarehouseDetail();

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions>
        <WarehouseProductExportButton {...props} warehouseId={warehouseId} name={warehouse?.name ?? 'warehouse'} />
        <PermissionCheck
          permissions={[STOCK_PERMISSIONS.WRITE]}
        >
          <StockWarehouseImportAction />
          <StockWarehouseAction />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(StoreProductListToolbar);

const StockWarehouseAction = () => {
  const { warehouseId } = useWarehouseDetail();
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (
    <>
      <AddButton action={onOpen} />

      <ProductWarehouseStockCreateModal
        title='warehouse.title'
        subtitle='warehouse.subtitle'
        open={isOpen}
        onClose={onClose}
        initValue={{
          warehouse: warehouseId as unknown as IWarehouse,
          note: '',
          operation: STOCK_OPERATIONS.ADDED,
          quantity: 1,
          item: null,
        }}
      />
    </>
  );
};

const StockWarehouseImportAction = () => {
  const { warehouseId } = useWarehouseDetail();
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('stock');
  return (
    <>
      <AddButton variant='outlined' startIcon={<UploadFile />} action={onOpen}>
        {t('productImport')}
      </AddButton>
      <ProductWarehouseImportStockCreateModal
        title='warehouse.import.title'
        subtitle='warehouse.import.subtitle'
        open={isOpen}
        onClose={onClose}
        initValue={{
          warehouse: warehouseId as unknown as IWarehouse,
          file: null,
        }}
      />
    </>
  );
};
