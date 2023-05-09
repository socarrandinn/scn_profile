import { EntityApiService } from '@dfl/react-security';
import { ITeam } from 'modules/rrhh/team/interfaces';

class TeamService extends EntityApiService<ITeam> {}

export default new TeamService('ms-rrhh/api/teams');
