import { memo } from 'react';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useStoreDetail } from 'modules/inventory/warehouse/context/StoreContext';
import { useDeleteStore } from 'modules/inventory/warehouse/hooks/useDeleteStore';

const StoreDeleteButton = () => {
  const { warehouseId } = useStoreDetail();
  const { mutate, isLoading } = useDeleteStore(warehouseId, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(StoreDeleteButton);
