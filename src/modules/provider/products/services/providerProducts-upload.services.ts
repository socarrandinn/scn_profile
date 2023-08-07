import { ImageUpload } from 'components/UploadFiles/files.services';
import { UploadService } from 'modules/common/service';
import { IProducts } from 'modules/provider/products/interfaces';

class ProvedorProductsUploadService extends UploadService<IProducts> {
  uploadImage = (ProveProductsId: string, file: File | undefined): Promise<ImageUpload> => {
    return this.upload(`/${ProveProductsId}/image`, file)
  };
}
export default new ProvedorProductsUploadService('/ms-inventory/api/provider');
