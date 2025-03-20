import { memo, useCallback } from 'react';
import MessageCreateModal from 'modules/client/message/containers/MessageCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneMessage } from 'modules/client/message/hooks/useFindOneMessage';

const MessageEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneMessage(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <MessageCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(MessageEditModal);
