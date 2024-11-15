import { memo } from 'react';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { useDeleteDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useDeleteDistributionCenters';

const StoreDeleteButton = () => {
  const { distributionCenterId } = useDistributionCenterDetail();
  const { mutate, isLoading } = useDeleteDistributionCenters(distributionCenterId, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(StoreDeleteButton);
