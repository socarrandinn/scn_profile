import { IUser } from 'modules/security/users/interfaces/IUser';
import { UploadService } from 'modules/common/service';
import { IImageMedia } from 'modules/common/interfaces';

class MediaUploadService extends UploadService<IUser> {
  imageUpload = (path: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(path ?? '/upload', file);
  };

  multipleImageUpload = (path: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(path ?? '/upload/multiple', file);
  };
}

export default new MediaUploadService('/ms-cms/api/media');
