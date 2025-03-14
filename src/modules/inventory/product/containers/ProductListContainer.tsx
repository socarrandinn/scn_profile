import { memo, useMemo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProducts } from 'modules/inventory/product/hooks/useFindProducts';
import { productColumns } from 'modules/inventory/product/constants/product.columns';
import { ProductListToolbar } from 'modules/inventory/product/components/ProductListToolbar';
import { ProductTabsFilter } from 'modules/inventory/product/components/ProductTabsFilter';
import useDFLTour from 'hooks/useDFLTour';
import { StepsGroup } from 'services/tour-service';

const ProductListContainer = () => {
  const { isLoading, error, data, filters, search } = useFindProducts();

  const launchTour = useMemo(() => {
    return Boolean(data);
  }, [data]);

  useDFLTour(StepsGroup.menu_inventory, launchTour);
  return (
    <Box>
      <ProductTabsFilter />
      <ProductListToolbar search={search} filters={filters} total={data?.total} />
      <Table
        columns={productColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(ProductListContainer);
