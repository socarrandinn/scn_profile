import { memo } from 'react';
import { FilterViewProvider, Table, TableProvider } from '@dfl/mui-admin-layout';
import { ProductStoreListToolbar } from 'modules/inventory/store/components/ProductStoreListToolbar';
import { productTabs, supplierInventoryStoreProductColumns, supplierStoreProductFilters } from 'modules/inventory/product/constants';
import { useFindProducts } from 'modules/inventory/product/hooks/useFindProducts';

type SupplierInventoryTabPannerProps = {
  tab: {
    label: string;
    value: string;
  };
};

const SupplierInventoryTabPanner = ({ tab }: SupplierInventoryTabPannerProps) => {
  // const { value: storeId } = tab;
  const { data, isLoading, error } = useFindProducts();

  return (
    <TableProvider id={'product'} filters={supplierStoreProductFilters}>
      <FilterViewProvider views={productTabs}>
        <ProductStoreListToolbar />
        <Table
          columns={supplierInventoryStoreProductColumns}
          data={data?.data}
          total={data?.total}
          isLoading={isLoading}
          error={error}
          select
        />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(SupplierInventoryTabPanner);
