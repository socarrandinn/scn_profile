import { memo, useCallback } from 'react';
import { FontIconPicker, HandlerError } from '@dfl/mui-react-common';
import { useTeamDetail } from 'modules/store/employee/team/contexts/TeamDetailsContext';
import useTeamUpdateIconForm from 'modules/store/employee/team/hooks/useTeamUpdateIconForm';
import { useSecurity } from '@dfl/react-security';
import { TEAM_PERMISSIONS } from 'modules/store/employee/team/constants';

const UpdateTeamIcon = () => {
  const { data: team } = useTeamDetail();
  const { onSubmit, error } = useTeamUpdateIconForm(team);

  const { hasPermission } = useSecurity();
  const canEdit = hasPermission(TEAM_PERMISSIONS.TEAM_WRITE)

  const handleSubmit = useCallback(
    (val: any) => {
      onSubmit({ icon: val } as any);
    },
    [onSubmit],
  );

  return (
        <>
            <HandlerError error={error}/>
            <FontIconPicker
                readOnly={!canEdit}
                name='icon'
                bgColor={team?.color || 'error'}
                shape='square'
                value={team?.icon}
                size='large'
                onSubmit={handleSubmit}
            />
        </>
  );
};

export default memo(UpdateTeamIcon);
