import { memo } from 'react';
import { useParams } from 'react-router';
import TeamDetailsContainer from 'modules/rrhh/team/containers/TeamDetailsContainer';
import { TeamDetailProvider } from 'modules/rrhh/team/contexts/TeamDetailsContext';

const TeamDetails = () => {
  const { id } = useParams();

  return (
    <TeamDetailProvider teamId={id as string}>
      <TeamDetailsContainer />
    </TeamDetailProvider>
  );
};

export default memo(TeamDetails);
