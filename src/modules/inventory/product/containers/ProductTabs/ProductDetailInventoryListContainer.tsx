import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { inventoryProductColumns } from 'modules/inventory/product/constants/product-inventory.columns';
import { ProductInventoryListToolbar } from 'modules/inventory/product/components/ProductInventoryListToolbar';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindStoresByIds } from 'modules/inventory/store/hooks/useFindStoresByIds';

const ProductDetailInventoryListContainer = () => {
  const { product } = useProductDetail();
  // @ts-ignore
  const storesIds = product?.stock.map((item: any) => item.store);
  const { data, error, isLoading } = useFindStoresByIds(storesIds);

  return (
    <Box>
      <TableProvider id={'inventoryProduct'}>
        <ProductInventoryListToolbar />
        <Table
          columns={inventoryProductColumns}
          data={data?.data}
          total={data?.total}
          isLoading={isLoading}
          error={error}
        />
      </TableProvider>
    </Box>
  );
};

export default memo(ProductDetailInventoryListContainer);
