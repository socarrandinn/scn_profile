import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { supplierProductTabColumns } from 'modules/inventory/product/constants';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { SupplierProductToolbar } from '../../supplier/components/SupplierProductToolbar';
import { useFindLogisticProducts } from '../hooks/useFindLogisticProducts';

const LogisticProductListContainer = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { isLoading, error, data } = useFindLogisticProducts(logisticId);

  return (
    <Box>
      <SupplierProductToolbar />
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
