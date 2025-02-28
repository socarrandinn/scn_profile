import { UploadService } from 'modules/common/service';
import { IImageMedia, IImageOption } from 'modules/common/interfaces';
import { IMedia } from '../interfaces/IMedia';
import { ApiClientService, RequestConfig } from '@dfl/react-security';

class MediaService extends UploadService<IMedia> {
  search = (params?: any, config?: RequestConfig): any => {
    const size = params?.size || 24;
    return this.handleSearchResponse(ApiClientService.post(this.getPath('/search'), params, config), size);
  };

  imageUpload = (path: string, file: File | undefined, imageOption: IImageOption): Promise<IImageMedia> => {
    return this.uploadImageOption(path ?? '/upload', file, imageOption);
  };

  multipleImageUpload = (path: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(path ?? '/upload/multiple', file);
  };
}

export default new MediaService('/ms-cms/api/media');
