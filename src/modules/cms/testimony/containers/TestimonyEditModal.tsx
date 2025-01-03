import { memo, useCallback } from 'react';
import TestimonyCreateModal from 'modules/cms/testimony/containers/TestimonyCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneTestimony } from 'modules/cms/testimony/hooks/useFindOneTestimony';

const TestimonyEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneTestimony(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <TestimonyCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(TestimonyEditModal);
