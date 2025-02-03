import { memo, useMemo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { inventoryProductColumns } from 'modules/inventory/product/constants/product-inventory.columns';
import { ProductInventoryListToolbar } from 'modules/inventory/product/components/ProductInventoryListToolbar';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindWarehousesByIds } from 'modules/inventory/warehouse/hooks/useFindWarehousesByIds';
import { useFindWarehouseStockByProductId } from 'modules/inventory/warehouse/hooks/useFindWarehouseStockByProductId';

const ProductDetailInventoryListContainer = () => {
  const { product } = useProductDetail();

  const warehouseIds = useMemo(
    () => (product?.stock ? product?.stock?.map((item: any) => item.warehouse) : []),
    [product?.stock],
  );

  // change by useFindWarehouseStockByProductId //todo
  const { data, error, isLoading } = useFindWarehouseStockByProductId(product?._id as string);

  return (
    <Box mb={3}>
      <ProductInventoryListToolbar />
      <Table
        columns={inventoryProductColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
};

export default memo(ProductDetailInventoryListContainer);
