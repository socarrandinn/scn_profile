import { memo, useCallback } from 'react';
import TeamCreateModal from 'modules/store/employee/team/containers/TeamCreateModal';
import { useSearchParams } from 'react-router-dom';
import { ITeam } from 'modules/store/employee/team/interfaces';

type TeamEditModalProps = {
  isLoading: boolean
  data?: ITeam
  error: any
  entityId?: string | null
}
const TeamEditModal = ({ isLoading, data, error, entityId }: TeamEditModalProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
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
