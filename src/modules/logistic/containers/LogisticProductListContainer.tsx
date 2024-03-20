import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { supplierProductTabColumns } from 'modules/inventory/product/constants';
import { useProvider } from 'hooks/useProvider';
import { useFindLogisticProducts } from 'modules/inventory/provider/logistics/hooks/useFindLogisticProducts';
import LogisticProductsToolbar from 'modules/inventory/provider/logistics/components/LogisticProductsToolbar/LogisticProductsToolbar';

const LogisticProductListContainer = () => {
  const { providerId } = useProvider();
  const { isLoading, error, data } = useFindLogisticProducts(providerId);

  return (
    <Box>
      <LogisticProductsToolbar />
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
