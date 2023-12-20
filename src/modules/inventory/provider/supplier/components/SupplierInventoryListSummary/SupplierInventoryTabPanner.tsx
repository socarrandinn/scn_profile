import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import { ProductStoreListToolbar } from 'modules/inventory/store/components/ProductStoreListToolbar';
import { supplierInventoryStoreProductColumns, supplierStoreProductFilters } from 'modules/inventory/product/constants';
import { Box } from '@mui/material';
import { useFindProductByStore } from 'modules/inventory/product/hooks/useFindProductByStore';

type SupplierInventoryTabPannerProps = {
  tab: {
    label: string;
    value: string;
  };
};

const SupplierInventoryTabPanner = ({ tab }: SupplierInventoryTabPannerProps) => {
  const { value: storeId } = tab;

  return (
    <TableProvider id={'product'} filters={supplierStoreProductFilters}>
      <ProductStoreListToolbarContainer storeId={storeId} />
    </TableProvider>
  );
};

export default memo(SupplierInventoryTabPanner);

type ProductStoreListToolbarContainerProps = {
  storeId: string;
};
export const ProductStoreListToolbarContainer = ({ storeId }: ProductStoreListToolbarContainerProps) => {
  const { data, isLoading, error } = useFindProductByStore(storeId);

  return (
    <Box>
      <ProductStoreListToolbar />
      <Table
        columns={supplierInventoryStoreProductColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};
