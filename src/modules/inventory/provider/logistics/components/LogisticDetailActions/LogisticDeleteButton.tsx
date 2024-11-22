import { memo } from 'react';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import { useDeleteLogistics } from 'modules/inventory/provider/logistics/hooks/useDeleteLogistics';
import { SimpleDeleteButton } from 'components/Actions/DeleteAction';
import { DELETE_PROVIDER_ERRORS } from 'modules/inventory/provider/common/constants/provider-errors';

const LogisticDeleteButton = () => {
  const { logisticId } = useLogisticsDetailContext();
  const { mutate, isLoading, error } = useDeleteLogistics(logisticId as string, () => 'void', true);
  return <SimpleDeleteButton isLoading={isLoading} onDelete={mutate} error={error} errors={DELETE_PROVIDER_ERRORS} />;
};

export default memo(LogisticDeleteButton);
