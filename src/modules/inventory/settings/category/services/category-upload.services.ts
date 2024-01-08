import { UploadService } from 'modules/common/service';
import { ICategory } from 'modules/inventory/settings/category/interfaces';
import { IImageMedia } from 'modules/common/interfaces';

class CategoryUploadService extends UploadService<ICategory> {
  uploadImage = (categoryId: string, file: File | undefined): Promise<IImageMedia> => {
    return this.upload(`/${categoryId}/image`, file)
  };
}

export default new CategoryUploadService('/ms-inventory/api/categories');
