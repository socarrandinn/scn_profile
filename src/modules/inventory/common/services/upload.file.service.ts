import { ApiClientService, EntityApiService } from '@dfl/react-security';

class UploadService extends EntityApiService<any> {
  importFile = (file: FormData) => {
    if (file) {
      return this.handleResponse(ApiClientService.post(this.getPath('/files/upload'), file));
    }
    return Promise.reject({
      message: 'You must need a formData',
    });
  };
}

export default new UploadService('/ms-auth/api/storage');
