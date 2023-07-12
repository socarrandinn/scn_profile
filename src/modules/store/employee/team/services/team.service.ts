import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ITeam } from 'modules/store/employee/team/interfaces';

class TeamService extends EntityApiService<ITeam> {
  searchTags = (params: any, config?: RequestConfig) => {
    return this.handleSearchResponse(
      ApiClientService.post(this.getPath('/tags/search'), params, config),
      params?.size || 100,
    );
  };

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

  getMemberAllByidTeam = (teamId: string, params: any, config?: any) => {
    if (teamId) {
      const size = params?.size || 20;
      return this.handleSearchResponse(ApiClientService.post(this.getPath(`/${teamId}/members`), params, config), size);
    }
    return Promise.reject(new Error('You must need a teamId'));
  }
}

export default new TeamService('/ms-rrhh/api/teams');
