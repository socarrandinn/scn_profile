import { memo, useCallback } from 'react';
import CauseCancellationCreateModal from 'modules/sales/settings/cause-cancellation/containers/CauseCancellationCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneCauseCancellation } from 'modules/sales/settings/cause-cancellation/hooks/useFindOneCauseCancellation';

const CauseCancellationEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneCauseCancellation(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <CauseCancellationCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(CauseCancellationEditModal);
