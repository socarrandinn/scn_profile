import { UploadService } from 'modules/common/service';
import { IProvider } from '../interfaces';
import { IImageMedia } from 'modules/common/interfaces';

class ProvidersUploadService extends UploadService<IProvider> {
  uploadAvatar = (logisticsId: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(`/${logisticsId}/image`, file);
  };
}

export default new ProvidersUploadService('/ms-inventory/api/providers/common');
