import { memo, useCallback } from 'react';
import TagsCreateModal from 'modules/inventory/settings/tags/containers/TagsCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneTags } from 'modules/inventory/settings/tags/hooks/useFindOneTags';

const TagsEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneTags(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <TagsCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(TagsEditModal);
