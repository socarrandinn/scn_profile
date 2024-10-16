import { ApiClientService, EntityApiService } from '@dfl/react-security';

export class OrderCommonService<T> extends EntityApiService<T> {
  updateStatus = (orderId: string, code: string | undefined, statusId: string | undefined): any => {
    if (code && code.match(/-(\d)+$/)) {
      return ApiClientService.post(`/ms-auth/api/sub-orders/${orderId}/status`, { status: statusId });
    }

    return ApiClientService.post(this.getPath(`/${orderId}/status`), { status: statusId });
  };
}
