import { memo, useCallback } from 'react';
import TabCreateModal from 'modules/inventory/settings/tab/containers/TabCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneTab } from 'modules/inventory/settings/tab/hooks/useFindOneTab';

const TabEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneTab(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <TabCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(TabEditModal);
