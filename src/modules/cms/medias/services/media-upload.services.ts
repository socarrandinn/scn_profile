import { UploadService } from 'modules/common/service';
import { IImageMedia } from 'modules/common/interfaces';
import { IMedia } from '../interfaces/IMedia';

class MediaService extends UploadService<IMedia> {
  imageUpload = (path: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(path ?? '/upload', file);
  };

  multipleImageUpload = (path: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(path ?? '/upload/multiple', file);
  };
}

export default new MediaService('/ms-cms/api/media');
