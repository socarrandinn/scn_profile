import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { INotification } from '../interfaces/INotification';

class NotificationService extends EntityApiService<INotification> {
  searchNotification = (params?: any, config?: any): Promise<any> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/user/search'), params, config));
  };

  deleteNotification = (notificationId: string, config?: any) => {
    if (notificationId) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(`/${notificationId}/user/got-it`), undefined, config),
      );
    }
    return Promise.reject(new Error('You must need a notificationId'));
  };
}

export default new NotificationService('/ms-auth/api/notifications');
