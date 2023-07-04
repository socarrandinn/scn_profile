import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ImageUpload } from 'components/UploadFiles/files.services';

export class UploadService<T> extends EntityApiService<T> {
  upload = (path: string, file: File | undefined): Promise<ImageUpload> => {
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
}

export default new UploadService('/ms-auth/api/storage');
