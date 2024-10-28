import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductsByStore } from 'modules/inventory/product/hooks/useFindStoreProducts';
import { StoreProductListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { warehouseProductColumns } from 'modules/inventory/warehouse/constants/warehouse-products.columns';
import { useWarehouseDetail } from '../../context/WarehouseContext';

const StoreProductsListContainer = () => {
  const { isLoading, error, data } = useFindProductsByStore();
  const { warehouseId } = useWarehouseDetail();
  return (
    <Box>
      <StoreProductListToolbar filters={undefined} total={undefined} warehouseId={warehouseId} />
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
