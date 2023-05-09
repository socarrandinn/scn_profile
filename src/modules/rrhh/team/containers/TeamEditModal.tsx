import { memo, useCallback } from 'react';
import TeamCreateModal from 'modules/rrhh/team/containers/TeamCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneTeam } from 'modules/rrhh/team/hooks/useFindOneTeam';

const TeamEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneTeam(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <TeamCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(TeamEditModal);
