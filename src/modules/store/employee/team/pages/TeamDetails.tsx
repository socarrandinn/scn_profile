import { memo } from 'react';
import { useParams } from 'react-router';
// import TeamDetailsContainer from 'modules/store/employee/team/containers/TeamDetailsContainer';
// import { TeamDetailProvider } from 'module/store/employee/team/contexts/TeamDetailsContext';

const TeamDetails = ({ teamId }: { teamId?: string }) => {
  const { id } = useParams();

  return (
    <></>
    // <TeamDetailProvider teamId={teamId || id as string}>
    //   <TeamDetailsContainer />
    // </TeamDetailProvider>
  );
};

export default memo(TeamDetails);
