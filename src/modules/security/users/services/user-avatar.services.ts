import { IUser } from 'modules/security/users/interfaces/IUser';
import { UploadService } from 'modules/common/service';
import { IImageMedia } from 'modules/common/interfaces';

class UserAvatarService extends UploadService<IUser> {
  uploadAvatar = (userId?: string, file?: File): Promise<IImageMedia> => {
    return this.upload(userId as string, file);
  };

  getPath (concat?: string | null, options?: any): string {
    if (concat) {
      return super.getPath(!concat.startsWith('/') ? `/${concat}` : concat, options);
    }
    return '/ms-auth/api/account/avatar';
  }
}

export default new UserAvatarService('/ms-auth/api/users/avatar');
