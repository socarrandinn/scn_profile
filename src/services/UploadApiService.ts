import { EntityApiService, ApiClientService } from '@dfl/react-security';

type IFiles = {
  file?: File;
};

class UploadApiService extends EntityApiService<IFiles> {
  // TODO: Change this to your own API endpoint
  uploadFile = (params: File | File[], onProgress: () => void) => {
    const formData = new FormData();

    if (params instanceof Array) {
      params.forEach((file) => {
        formData.append('file', file);
        formData.append('name', file?.name);
      });
    } else {
      formData.append('file', params);
      formData.append('name', params?.name);
    }

    return ApiClientService.post(this.getPath('/records'), formData).then(async ({ data }) => {
      // return file url
      return {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `http://127.0.0.1:8090/api/files/${data?.['@collectionId']}/${data?.id}/${data?.file}`,
        name: data?.name,
      };
    });
  };

  // TODO: Change this to your own API endpoint
  getOneFile = async (collectionId: string, fileId: string, fileName: string) => {
    return { url: `http://127.0.0.1:8090/api/files/${collectionId}/${fileId}/${fileName}`, name: fileName };
  };
}

export default new UploadApiService('/api/collections/files');
