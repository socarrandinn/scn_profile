import { ImageUpload } from 'components/UploadFiles/files.services';
import { UploadService } from 'modules/common/service';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';

class LogisticsUploadService extends UploadService<ILogistics> {
  uploadImage = (logisticsId: string, file: File | undefined): Promise<ImageUpload> => {
    return this.upload(`/${logisticsId}/image`, file)
  };
}

export default new LogisticsUploadService('/ms-inventory/api/provider');
