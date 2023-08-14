import { IUser } from 'modules/security/users/interfaces/IUser';
import { UploadService } from 'modules/common/service';
import { IImageMedia } from 'modules/common/interfaces';

class UserAvatarService extends UploadService<IUser> {
  uploadAvatar = (userId: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(`/${userId}`, file)
  };
}

export default new UserAvatarService('/ms-auth/api/user/avatar');
