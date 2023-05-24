import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ITeam } from 'modules/rrhh/team/interfaces';

class TeamService extends EntityApiService<ITeam> {
  searchWithPopulate = (payload: any, config?: RequestConfig) => {
    return this.search({ ...payload, populate: true }, config);
  };

  updateAvatar = (teamId: string | undefined, avatar: string) => {
    if (teamId && avatar) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${teamId}`), {
          _id: teamId,
          icon: avatar,
        }),
      );
    }
    return Promise.reject(new Error('You must need a teamId and an avatar'));
  };

  addMembers = (teamId: string | undefined, employeeIds: string[]) => {
    if (teamId && employeeIds) {
      if (employeeIds.length) {
        return this.handleResponse(
          ApiClientService.post(this.getPath(`/${teamId}/members`), {
            employees: employeeIds,
          }),
        );
      }
      return Promise.resolve();
    }

    return Promise.reject(new Error('You must need a teamId and a list of employee ids'));
  };

  deleteMembers = (teamId: string | undefined, employeeIds: string[]) => {
    if (teamId && employeeIds) {
      if (employeeIds.length) {
        return this.handleResponse(
          ApiClientService.delete(this.getPath(`/${teamId}/employee`), {
            data: {
              employees: employeeIds,
            },
          }),
        );
      }
      return Promise.resolve();
    }
    return Promise.reject(new Error('You must need a teamId and a list of employeeIds ids'));
  };
}

export default new TeamService('/ms-rrhh/api/teams');
