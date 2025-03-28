import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IValidation } from '../interfaces/IValidation';
import { parserManyOrders } from '../constants/order-table.parsing';
import { IOrderStatusImport, IStatusChange } from 'modules/sales/sub-orders/interfaces';

export class OrderCommonService<T> extends EntityApiService<T> {
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

  search = (params?: any, config?: RequestConfig): Promise<SearchResponseType<T>> => {
    const size = params?.size || 20;
    return this.handleSearchResponse(ApiClientService.post(this.getPath('/search '), params, config), size).then(
      parserManyOrders,
    );
  };

  /* STATUS CHANGE */
  updateStatusBulk = (payload: IStatusChange) => {
    if (payload?.status) {
      return ApiClientService.patch(this.getPath('/bulk/status'), payload);
    }
    throw new Error('Suborder status is required');
  };

  updateStatus = (orderId: string, status: string) => {
    if (status && orderId) {
      return ApiClientService.patch(this.getPath(`/${orderId}/status`), {
        status,
      });
    }
    throw new Error('Suborder _id and statusId is required');
  };

  importStatus = (payload: IOrderStatusImport) => {
    const { file } = payload;
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file?.name);

      return this.handleResponse(ApiClientService.post(this.getPath('/import-status-update'), formData));
    }
    return Promise.reject({
      message: 'You must need a file',
    });
  };
}
