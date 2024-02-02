import { memo } from 'react';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';
import { useDeleteStore } from 'modules/inventory/store/hooks/useDeleteStore';

const StoreDeleteButton = () => {
  const { storeId } = useStoreDetail();
  const { mutate, isLoading } = useDeleteStore(storeId as string, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(StoreDeleteButton);
