import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { logisticProductTabColumns } from 'modules/inventory/product/constants';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { useFindLogisticProducts } from '../hooks/useFindLogisticProducts';
import LogisticProductsToolbar from '../components/LogisticProductsToolbar/LogisticProductsToolbar';

const LogisticProductListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { isLoading, error, data, search, filters } = useFindLogisticProducts(logisticId);

  return (
    <Box>
      <LogisticProductsToolbar {...{ search, filters, total: data?.total }} />
      <Table
        columns={logisticProductTabColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        // select
      />
    </Box>
  );
};

export default memo(LogisticProductListContainer);
