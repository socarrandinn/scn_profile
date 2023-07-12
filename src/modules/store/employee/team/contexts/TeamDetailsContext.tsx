import { createContext, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { UseQueryResult } from '@tanstack/react-query';
import { ITeam } from 'modules/store/employee/team/interfaces';
import { useFindOneTeam } from 'modules/store/employee/team/hooks/useFindOneTeam';

type TeamDetailContextValue = UseQueryResult<ITeam> & {
  teamId: string;
};
// create context
// @ts-ignore
const TeamDetailContext = createContext<TeamDetailContextValue>();

// Proptypes of Provider component
type ContextProps = ChildrenProps & {
  teamId: string;
};

/**
 * Provider component
 * */
const TeamDetailProvider = ({ teamId, ...props }: ContextProps) => {
  const query = useFindOneTeam(teamId);

  return <TeamDetailContext.Provider value={{ ...query, teamId }} {...props} />;
};

// Default hooks to retrieve context data
const useTeamDetail = () => {
  const context = useContext(TeamDetailContext);
  if (context === undefined) {
    throw new Error('You must be inside a TeamDetailProvider'); // also, you can throw an error if it is you need the context
  }
  return context;
};

export { TeamDetailProvider, useTeamDetail };
