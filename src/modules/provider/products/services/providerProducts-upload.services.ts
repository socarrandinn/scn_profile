import { ImageUpload } from 'components/UploadFiles/files.services';
import { UploadService } from 'modules/common/service';
import { IProducts } from 'modules/provider/products/interfaces';

class ProviderProductsUploadService extends UploadService<IProducts> {
  uploadImage = (ProveProductsId: string, file: File | undefined): Promise<ImageUpload> => {
    return this.upload(`/${ProveProductsId}/image`, file)
  };
}
export default new ProviderProductsUploadService('/ms-inventory/api/provider');
