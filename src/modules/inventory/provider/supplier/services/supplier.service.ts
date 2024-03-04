import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

class SupplierService extends EntityApiService<ISupplier> {
  updateVisibility = (providerId: string,params?: any) => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${providerId}/visibility`), params));
  };
}

export default new SupplierService('/ms-inventory/api/provider/suppliers');
