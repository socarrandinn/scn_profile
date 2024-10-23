import { memo, useCallback } from 'react';
import DisallowedWordCreateModal from 'modules/crm/settings/disallowed-word/containers/DisallowedWordCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneDisallowedWord } from 'modules/crm/settings/disallowed-word/hooks/useFindOneDisallowedWord';

const DisallowedWordEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOneDisallowedWord(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [entityId, searchParams, setSearchParams]);

  return (
    <DisallowedWordCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(DisallowedWordEditModal);
