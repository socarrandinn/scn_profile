import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { supplierProductTabColumns } from 'modules/inventory/product/constants';
import { useProvider } from 'hooks/useProvider';
import { useFindLogisticProducts } from 'modules/inventory/provider/logistics/hooks/useFindLogisticProducts';

const LogisticProductListContainer = () => {
  const { providerId } = useProvider();
  const { isLoading, error, data } = useFindLogisticProducts(providerId);

  return (
    <Box>
      <Table
        columns={supplierProductTabColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(LogisticProductListContainer);
