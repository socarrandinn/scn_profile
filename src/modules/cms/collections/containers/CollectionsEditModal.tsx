import { memo, useCallback } from 'react';
import CollectionsCreateModal from 'modules/cms/collections/containers/CollectionsCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneCollections } from 'modules/cms/collections/hooks/useFindOneCollections';

const CollectionsEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOneCollections(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, entityId]);

  return (
    <CollectionsCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(CollectionsEditModal);
