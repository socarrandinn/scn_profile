import { UploadService } from 'modules/common/service';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { IImageMedia } from 'modules/common/interfaces';

class LogisticsUploadService extends UploadService<ILogistics> {
  uploadImage = (logisticsId: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(`/${logisticsId}/image`, file)
  };
}

export default new LogisticsUploadService('/ms-inventory/api/provider');
