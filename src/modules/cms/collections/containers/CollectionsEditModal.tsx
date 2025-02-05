import { memo, useCallback } from 'react';
import CollectionsCreateModal from 'modules/cms/collections/containers/CollectionsCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneCollections } from 'modules/cms/collections/hooks/useFindOneCollections';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

type Props = { contentType: COLLECTION_CONTENT_TYPE };
const CollectionsEditModal = ({ contentType }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneCollections(entityId, contentType);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, entityId]);

  return (
    <CollectionsCreateModal
      title='modal.edit'
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(CollectionsEditModal);
