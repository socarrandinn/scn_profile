import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IProductAction } from '../interfaces/IProductImport';

class UploadImportProduct extends EntityApiService<any> {
  importFile = (file: FormData) => {
    if (file) {
      return this.handleResponse(ApiClientService.post(this.getPath('/products/import'), file));
    }
    return Promise.reject({
      message: 'You must need a formData',
    });
  };

  jobCurrent = (params: IProductAction) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/products/import/${params.job}`), {}));
  };
}

export default new UploadImportProduct('/ms-inventory/api');
