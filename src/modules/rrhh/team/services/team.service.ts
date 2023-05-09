import { EntityApiService, RequestConfig } from '@dfl/react-security';
import { ITeam } from 'modules/rrhh/team/interfaces';

class TeamService extends EntityApiService<ITeam> {
  searchWithPopulate = (payload: any, config?: RequestConfig) => {
    payload.populate = true;
    return this.search(payload, config)
  };
}

export default new TeamService('/ms-rrhh/api/teams');
