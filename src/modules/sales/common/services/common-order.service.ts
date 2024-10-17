import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IShipping } from '../interfaces/IOrder';
import { IValidation } from '../interfaces/IValidation';

export class OrderCommonService<T> extends EntityApiService<T> {
  updateStatus = (orderId: string, code: string | undefined, statusId: string | undefined): any => {
    if (code && code.match(/-(\d)+$/)) {
      return ApiClientService.post(`/ms-auth/api/sub-orders/${orderId}/status`, { status: statusId });
    }

    return ApiClientService.post(this.getPath(`/${orderId}/status`), { status: statusId });
  };

  updateShipping = (id: string | undefined, values: Partial<IShipping>): any => {
    if (id) {
      return this.handleResponse(ApiClientService.patch(this.getPath(`/${id}/shipping`), values));
    }
  };

  validateBilling = (id: string | undefined, values: IValidation): any => {
    if (id) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${id}/billing`), {
          verification: values,
        }),
      );
    }
  };

  validateShipping = (id: string | undefined, values: IValidation): any => {
    if (id) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${id}/shipping`), {
          verification: values,
        }),
      );
    }
  };
}
