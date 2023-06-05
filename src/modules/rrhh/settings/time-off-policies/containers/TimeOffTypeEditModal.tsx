import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFindOneTimeOffType } from '../hooks/useFindOneTimeOffType';
import TimeOffPolicyTypeCreateModal from 'modules/rrhh/settings/time-off-policies/containers/TimeOffPolicyTypeCreateModal';
import { EditTypeEnum } from 'modules/rrhh/settings/time-off-policies/constants/editType.enum';

const TimeOffTypeEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const editType = searchParams.get('editType');
  const { isLoading, data, error } = useFindOneTimeOffType(entityId, editType === EditTypeEnum.TIME_OFF_TYPE);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    delete params.editType;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <TimeOffPolicyTypeCreateModal
      title='edit'
      open={!!entityId && editType === EditTypeEnum.TIME_OFF_TYPE}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
      timeOffTypeId={entityId}
    />
  );
};

export default memo(TimeOffTypeEditModal);
