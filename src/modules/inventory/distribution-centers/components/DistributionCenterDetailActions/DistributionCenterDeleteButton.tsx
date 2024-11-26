import { memo } from 'react';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { useDeleteDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useDeleteDistributionCenters';
import { DELETE_DISTRIBUTION_CENTER_ERRORS } from '../../constants';

const StoreDeleteButton = () => {
  const { distributionCenterId } = useDistributionCenterDetail();
  const { mutate, isLoading, error } = useDeleteDistributionCenters(distributionCenterId, () => 'void', true);
  return (
    <DeleteButton isLoading={isLoading} onDelete={mutate} error={error} errors={DELETE_DISTRIBUTION_CENTER_ERRORS} />
  );
};

export default memo(StoreDeleteButton);
