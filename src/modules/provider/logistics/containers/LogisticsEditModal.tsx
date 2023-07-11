import { memo, useCallback } from 'react';
import LogisticsCreateModal from 'modules/provider/logistics/containers/LogisticsCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneLogistics } from 'modules/provider/logistics/hooks/useFindOneLogistics';

const LogisticsEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneLogistics(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <LogisticsCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(LogisticsEditModal);
