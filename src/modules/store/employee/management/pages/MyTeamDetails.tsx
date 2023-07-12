import { useUser } from '@dfl/react-security';
import { memo } from 'react';
import { TeamDetails } from 'modules/store/employee/team/pages';

const MyTeamDetails = () => {
  const { user } = useUser();

  return (
        <TeamDetails teamId={user?.team}/>
  );
};

export default memo(MyTeamDetails);
