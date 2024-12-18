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
import { WAREHOUSE_AREA_PERMISSIONS } from 'modules/inventory/settings/warehouse-area/constants';
import { PRODUCT_PERMISSIONS } from '../../constants';

type StoreProductListToolbarProps = {
  filters: any;
  total: number | undefined;
  localExport?: boolean;
  hideAdd?: boolean;
};

const StoreProductListToolbar = ({ filters, total, localExport = false }: StoreProductListToolbarProps) => {
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
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions>
        <PermissionCheck permissions={[WAREHOUSE_AREA_PERMISSIONS.WAREHOUSE_AREA_VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW]}>
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
