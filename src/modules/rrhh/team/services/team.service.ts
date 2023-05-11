import { EntityApiService, RequestConfig } from '@dfl/react-security';
import { ITeam } from 'modules/rrhh/team/interfaces';

class TeamService extends EntityApiService<ITeam> {
  searchWithPopulate = (payload: any, config?: RequestConfig) => {
    return this.search({ ...payload, populate: true }, config)
  };
}

export default new TeamService('/ms-rrhh/api/teams');
