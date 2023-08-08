import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { Dispatch, SetStateAction } from 'react';

export type ImageUpload = {
  thumb: string;
  image: string;
};

export type UploadMediaType = {
  file: File | null;
  maxFileSize?: number | undefined;
  fileTypes: string[];
};

class FilesService extends EntityApiService<any> {
  upload = (files: File | undefined): Promise<ImageUpload> => {
    const formData = new FormData();
    formData.append('files', files as Blob);

    if (files) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(''), formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );
    }

    return Promise.reject(new Error('You must need a userId and a files'));
  };

  uploadFileProgress = (formData: FormData, setCompleted: Dispatch<SetStateAction<number>>) => {
    if (formData) {
      return this.handleResponse(
        ApiClientService.post('', formData, {
          onUploadProgress: function (progressEvent) {
            const percentCompleted = progressEvent.total
              ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
              : 0;
            setCompleted(percentCompleted);
          },
        }),
      );
    }
    return Promise.reject(new Error('You must need a formData'));
  };
}

export default new FilesService('/ms-auth/api/storage');
