import { memo, useCallback } from 'react';
import PageCreateModal from 'modules/cms/page/containers/PageCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOnePage } from 'modules/cms/page/hooks/useFindOnePage';

const PageEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOnePage(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <PageCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(PageEditModal);
