import { memo, useMemo } from 'react';
import { useParams } from 'react-router';
import { useFindInventoryStockByWarehouse } from 'modules/inventory/warehouse/hooks/useFindInventoryStockByWarehouse';
import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { supplierInventoryStoreProductColumns } from 'modules/inventory/product/constants';
import { ProviderStockListToolbar } from '../../common/components/ProviderStockListToolbar';

const SupplierInventoryListContainer = ({ warehouseId }: { warehouseId: string }) => {
  const { id: providerId } = useParams();
  const { data, isLoading, error } = useFindInventoryStockByWarehouse(warehouseId, providerId);
  const columns: HeadCell[] = useMemo(() => supplierInventoryStoreProductColumns(warehouseId), [warehouseId]);

  return (
    <>
      <ProviderStockListToolbar warehouseId={warehouseId} />
      <Table
        columns={columns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </>
  );
};

export default memo(SupplierInventoryListContainer);
