import { memo, useCallback } from 'react';
import { FontIconPicker, HandlerError } from '@dfl/mui-react-common';
import { useTeamDetail } from 'modules/rrhh/team/contexts/TeamDetailsContext';
import useTeamUpdateIconForm from 'modules/rrhh/team/hooks/useTeamUpdateIconForm';

const UpdateTeamIcon = () => {
  const { data: team } = useTeamDetail();
  const { onSubmit, error } = useTeamUpdateIconForm(team);

  const handleSubmit = useCallback(
    (val: any) => {
      onSubmit({ icon: val } as any);
    },
    [onSubmit],
  );

  return (
    <>
      <HandlerError error={error} />
      <FontIconPicker
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
