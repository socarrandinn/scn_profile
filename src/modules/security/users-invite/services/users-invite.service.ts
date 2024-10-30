import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ICreateUserInvite, IUsersInvite } from 'modules/security/users-invite/interfaces';

const MS_AUTH = '/ms-auth/api';
class UsersInviteService extends EntityApiService<IUsersInvite> {
  inviteProviderUser = (payload: ICreateUserInvite, config?: RequestConfig) => {
    const { provider } = payload;
    if (provider) {
      return ApiClientService.post(`${MS_AUTH}/provider/${provider}/user-invite`, payload, config);
    }
    return Promise.reject(new Error('You must need a providerId'));
  };

  inviteWarehouseUser = (payload: ICreateUserInvite, config?: RequestConfig) => {
    const { warehouse } = payload;
    if (warehouse) {
      return ApiClientService.post(`${MS_AUTH}/warehouses/${warehouse}/user-invite`, payload, config);
    }
    return Promise.reject(new Error('You must need a warehouseId'));
  };

  inviteDistributionCenterUser = (payload: ICreateUserInvite, config?: RequestConfig) => {
    const { distributionCenter } = payload;
    if (distributionCenter) {
      return ApiClientService.post(
        `${MS_AUTH}/distribution-centers/${distributionCenter}/user-invite`,
        payload,
        config,
      );
    }
    return Promise.reject(new Error('You must need a distributionCenterId'));
  };
}

export default new UsersInviteService(`${MS_AUTH}/user-invite`);
