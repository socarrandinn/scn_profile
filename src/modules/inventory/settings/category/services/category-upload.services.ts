import { ImageUpload } from 'components/UploadFiles/files.services';
import { UploadService } from 'modules/common/service';
import { ICategory } from 'modules/inventory/settings/category/interfaces';

class CategoryUploadService extends UploadService<ICategory> {
  uploadImage = (categoryId: string, file: File | undefined): Promise<ImageUpload> => {
    return this.upload(`/${categoryId}/image`, file)
  };
}

export default new CategoryUploadService('/ms-inventory/api/categories');
