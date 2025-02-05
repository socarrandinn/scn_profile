import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { StoreProductListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { warehouseProductColumns } from 'modules/inventory/warehouse/constants/warehouse-products.columns';
import { useFindInventoryStockByWarehouse } from '../../hooks/useFindInventoryStockByWarehouse';
import { useWarehouseDetail } from '../../context/WarehouseContext';

const StoreProductsListContainer = () => {
  const { warehouseId } = useWarehouseDetail();
  const { isLoading, error, data, filters, search } = useFindInventoryStockByWarehouse(warehouseId);
  return (
    <Box>
      <StoreProductListToolbar filters={filters} total={data?.total} search={search} />
      <Table
        columns={warehouseProductColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(StoreProductsListContainer);
