import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindDispatchProducts } from '../hooks/useDispatchTabs';
import { productColumns } from 'modules/inventory/product/constants';
import { dispatchProductColumn } from '../constants';

const DispatchProductListContainer = () => {
  const { isLoading, error, data } = useFindDispatchProducts();
  return (
    <Box>
      {/*   <DispatchSubOrderListToolbar filters={filters} total={data?.total} search={search as string} /> */}
      <Table
        columns={dispatchProductColumn(productColumns?.filter((column) => !(column.field as string)?.match(/actions/)))}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        rowsPerPageOptions={[10, 20, 30, 50]}
        select
      />
    </Box>
  );
};

export default memo(DispatchProductListContainer);
