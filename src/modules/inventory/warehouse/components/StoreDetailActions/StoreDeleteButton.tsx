import { memo } from 'react';
import { DeleteButton } from 'components/Actions/DeleteAction';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { useDeleteStore } from 'modules/inventory/warehouse/hooks/useDeleteStore';
import { DELETE_WAREHOUSE_ERRORS } from '../../constants/warehouse-errors';

const StoreDeleteButton = () => {
  const { warehouseId } = useWarehouseDetail();
  const { mutate, isLoading, error } = useDeleteStore(warehouseId, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} error={error} errors={DELETE_WAREHOUSE_ERRORS} />;
};

export default memo(StoreDeleteButton);
