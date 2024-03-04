import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { Dispatch, SetStateAction } from 'react';
import { IImageMedia } from 'modules/common/interfaces';

export type UploadMediaType = {
  file: File | null;
  maxFileSize?: number | undefined;
  fileTypes: string[];
};

class FilesService extends EntityApiService<any> {
  upload = (files: File | File[] | undefined, path: string = '/ms-auth/api/storage'): Promise<IImageMedia> => {
    const formData = new FormData();
    const file = Array.isArray(files) ? files[0] : files;
    formData.append('file', file as Blob);

    if (files) {
      return this.handleResponse(
        ApiClientService.post(path, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );
    }

    return Promise.reject(new Error('You must need a userId and a files'));
  };

  uploadMany = (files: File[], path: string = '/ms-auth/api/storage/multiple'): Promise<IImageMedia[]> => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i] as Blob);
    }

    if (files) {
      return this.handleResponse(
        ApiClientService.post(path, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      );
    }
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(files.map(file => {
    //       return {
    //         thumb: URL.createObjectURL(file),
    //         url: URL.createObjectURL(file),
    //       }
    //     }))
    //     // reject(new Error('Missing files'));
    //   }, 10000)
    // })
    return Promise.reject(new Error('Missing files'));
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
