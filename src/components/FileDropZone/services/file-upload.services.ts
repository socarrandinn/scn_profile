import { IUser } from 'modules/security/users/interfaces/IUser';
import { UploadService } from 'modules/common/service';
import { IImageMedia } from 'modules/common/interfaces';
import { IFile } from '../interfaces/IFile';

class DropZoneUpload extends UploadService<IUser> {
  uploadFile = (path: string, file: File | undefined): Promise<IImageMedia | IFile> => {
    return this.upload(path, file);
  };
}

export default new DropZoneUpload('/ms-auth/api/storage');
