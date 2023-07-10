import { IUser } from 'modules/security/users/interfaces/IUser';
import { ImageUpload } from 'components/UploadFiles/files.services';
import { UploadService } from 'modules/common/service';

class UserAvatarService extends UploadService<IUser> {
  uploadAvatar = (userId: string, file: File | undefined): Promise<ImageUpload> => {
    return this.upload(`/${userId}`, file)
  };
}

export default new UserAvatarService('/ms-auth/api/user/avatar');
