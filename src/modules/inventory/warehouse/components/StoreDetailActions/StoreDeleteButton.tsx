import { memo } from 'react';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { useDeleteStore } from 'modules/inventory/warehouse/hooks/useDeleteStore';

const StoreDeleteButton = () => {
  const { warehouseId } = useWarehouseDetail();
  const { mutate, isLoading } = useDeleteStore(warehouseId, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(StoreDeleteButton);
