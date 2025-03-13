import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IDispatch, IDispatchVerify } from 'modules/sales/dispatch/interfaces';

class DispatchService extends EntityApiService<IDispatch> {
  verify = (filters: any, search: any): Promise<IDispatchVerify> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/verify'), { filters, search }));
  };

  add = (dispatchId: string | null, params: any) => {
    if (dispatchId) {
      return this.handleResponse(ApiClientService.post(this.getPath(`/${dispatchId}/add`), params));
    }
    throw new Error('required dispatchId');
  };

  remove = (dispatchId: string, filters: any) => {
    if (dispatchId) {
      return this.handleResponse(
        ApiClientService.delete(this.getPath(`/${dispatchId}/remove`), {
          data: {
            filters,
          },
        }),
      );
    }
    throw new Error('required dispatchId');
  };
}

export default new DispatchService('/ms-sales/api/dispatch');
