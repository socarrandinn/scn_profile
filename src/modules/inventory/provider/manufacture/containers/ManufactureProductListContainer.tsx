import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindProductsByManufacturer } from 'modules/inventory/product/hooks/useFindProductsByManufacturer';
import { manufacturerProductColumns } from '../constants';
import { ManufactureProductListToolbar } from '../components/ManufactureProductListToolbar';

const ManufactureProductListContainer = () => {
  const { isLoading, error, data } = useFindProductsByManufacturer();
  return (
    <Box>
      <ManufactureProductListToolbar/>
      <Table
        columns={manufacturerProductColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(ManufactureProductListContainer);
