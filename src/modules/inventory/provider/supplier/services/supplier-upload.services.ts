import { ImageUpload } from 'components/UploadFiles/files.services';
import { UploadService } from 'modules/common/service';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

class ProviderProductsUploadService extends UploadService<ISupplier> {
  uploadImage = (ProveProductsId: string, file: File | undefined): Promise<ImageUpload> => {
    return this.upload(`/${ProveProductsId}/image`, file)
  };
}
export default new ProviderProductsUploadService('/ms-inventory/api/provider');
