import { ApiClientService, EntityApiService } from '@dfl/react-security';

import { IValidation } from '../interfaces/IValidation';

export class OrderCommonService<T> extends EntityApiService<T> {
  updateStatus = (orderId: string, code: string | undefined, statusId: string | undefined): any => {
    if (code && code.match(/-(\d)+$/)) {
      return ApiClientService.post(`/ms-auth/api/sub-orders/${orderId}/status`, { status: statusId });
    }

    return ApiClientService.post(this.getPath(`/${orderId}/status`), { status: statusId });
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

  validate = (id: string): any => {
    if (id) {
      return this.handleResponse(ApiClientService.post(this.getPath(`/${id}/validate`), undefined));
    }
  };
}
