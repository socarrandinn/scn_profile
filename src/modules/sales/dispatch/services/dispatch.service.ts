import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IDispatch, IDispatchVerify, IVerifyPayload } from 'modules/sales/dispatch/interfaces';

class DispatchService extends EntityApiService<IDispatch> {
  verify = (payload: IVerifyPayload): Promise<IDispatchVerify> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/verify'), payload));
  };

  add = (dispatchId: string | null, params: any) => {
    if (dispatchId) {
      return this.handleResponse(ApiClientService.post(this.getPath('/add-suborders'), { ...params, dispatchId }));
    }
    throw new Error('required dispatchId');
  };

  remove = (dispatchId: string, filters: any) => {
    if (dispatchId) {
      return this.handleResponse(
        ApiClientService.post(this.getPath('/remove-suborders'), {
          dispatchId,
          filters,
        }),
      );
    }
    throw new Error('required dispatchId');
  };
}

export default new DispatchService('/ms-sales/api/dispatch');
