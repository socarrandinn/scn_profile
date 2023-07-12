import { memo, useCallback } from 'react';
import ReasonForCompensationChangeCreateModal from 'modules/store/employee/settings/reason-for-compensation-change/containers/ReasonForCompensationChangeCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneReasonForCompensationChanges } from 'modules/store/employee/settings/reason-for-compensation-change/hooks/useFindOneReasonForCompensation';

const ReasonForCompensationChangeEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneReasonForCompensationChanges(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ReasonForCompensationChangeCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ReasonForCompensationChangeEditModal);
