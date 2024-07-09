import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { mapperObjectToArrayTags } from 'modules/inventory/settings/tags/services/tags-mapper';

class SupplierService extends EntityApiService<ISupplier> {
  updateVisibility = (providerId: string, params?: any) => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${providerId}/visibility`), params));
  };

  getOne = (logisticId: string, config?: RequestConfig | undefined) => {
    return this.handleResponse(
      ApiClientService.get(this.getPath(`/${logisticId}`), config).then((data) => {
        const tags = mapperObjectToArrayTags(data?.data?.tags);
        return {
          ...data,
          data: {
            ...data.data,
            tags,
          },
        };
      }),
    );
  };

  // update tags
  updateTags = (payload: Partial<ISupplier>): any => {
    const { _id, tags } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}`), {
        tags,
      });
    }
    throw new Error('You must be inside a _id');
  };
}

export default new SupplierService('/ms-inventory/api/provider/suppliers');
