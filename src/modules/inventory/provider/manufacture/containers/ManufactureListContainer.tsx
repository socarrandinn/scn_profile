import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindManufactures } from 'modules/inventory/provider/manufacture/hooks/useFindManufactures';
import { manufactureColumns } from 'modules/inventory/provider/manufacture/constants/manufacture.columns';
import { ManufactureListToolbar } from 'modules/inventory/provider/manufacture/components/ManufactureListToolbar';
import ManufactureEditModal from 'modules/inventory/provider/manufacture/containers/ManufactureEditModal';

const ManufactureListContainer = () => {
  const { isLoading, error, data } = useFindManufactures();
  return (
    <Box>
      <ManufactureListToolbar />
      <Table
        columns={manufactureColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        // select
      />
      <ManufactureEditModal />
    </Box>
  );
};

export default memo(ManufactureListContainer);
