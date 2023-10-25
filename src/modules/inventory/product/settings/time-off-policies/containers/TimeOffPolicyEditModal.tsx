import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EditTypeEnum } from 'modules/inventory/product/settings/time-off-policies/constants/editType.enum';
import { useFindOneTimeOffPolicy } from 'modules/inventory/product/settings/time-off-policies/hooks/useFindOneTimeOffPolicy';
import TimeOffPolicyCreateModal from 'modules/inventory/product/settings/time-off-policies/containers/TimeOffPolicyCreateModal';

const TimeOffPolicyEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const editType = searchParams.get('editType');
  const { isLoading, data, error } = useFindOneTimeOffPolicy(entityId, editType === EditTypeEnum.TIME_OFF_POLICY);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    delete params.editType;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <TimeOffPolicyCreateModal
      title='edit'
      open={!!entityId && editType === EditTypeEnum.TIME_OFF_POLICY}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
      timeOffPolicyId={entityId}
    />
  );
};

export default memo(TimeOffPolicyEditModal);
