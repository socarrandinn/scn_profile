import { UploadService } from 'modules/common/service';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { IImageMedia } from 'modules/common/interfaces';

class ProviderProductsUploadService extends UploadService<ISupplier> {
  uploadImage = (ProveProductsId: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(`/${ProveProductsId}/image`, file);
  };
}

export default new ProviderProductsUploadService('/ms-inventory/api/provider');
