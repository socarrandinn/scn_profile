import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IImageMedia, IImageOption } from 'modules/common/interfaces';

export class UploadService<T> extends EntityApiService<T> {
  upload = (path: string, file: File | undefined): Promise<IImageMedia> => {
    const formData = new FormData();
    formData.append('file', file as Blob);

    if (file) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(path), formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );
    }

    return Promise.reject(new Error('You must need a userId and a files'));
  };

  uploadImageOption = (path: string, file: File | undefined, imageOption: IImageOption): Promise<IImageMedia> => {
    const formData = new FormData();
    formData.append('file', file as Blob);
    formData.append('imageOption', JSON.stringify(imageOption));

    console.log(imageOption, 'dddd');

    if (file) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(path), formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );
    }

    return Promise.reject(new Error('You must need a userId and a files'));
  };
}

export default new UploadService('/ms-auth/api/storage');
