import { memo, useCallback } from 'react';
import DistributionCentersCreateModal from 'modules/inventory/distribution-centers/containers/DistributionCentersCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneDistributionCenters } from 'modules/inventory/distribution-centers/hooks/useFindOneDistributionCenters';

const DistributionCentersEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneDistributionCenters(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <DistributionCentersCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(DistributionCentersEditModal);
