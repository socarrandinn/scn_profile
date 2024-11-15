import { memo } from 'react';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { useDeleteLogistics } from 'modules/inventory/provider/logistics/hooks/useDeleteLogistics';

const LogisticDeleteButton = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { mutate, isLoading } = useDeleteLogistics(logisticId as string, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(LogisticDeleteButton);
