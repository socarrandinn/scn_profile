import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IImageMedia } from 'modules/common/interfaces';

class ProductAvatarService extends EntityApiService<IUser> {
  uploadAvatar = (userId: string, file: File | undefined): Promise<IImageMedia> => {
    const formData = new FormData();
    formData.append('file', file as Blob);

    if (file) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(`/${userId}`), formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );
    }

    return Promise.reject(new Error('You must need a userId and a files'));
  };
}

export default new ProductAvatarService('/ms-rrhh/api/products/avatar');
