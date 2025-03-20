import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IBank } from 'modules/sales/settings/bank/interfaces';

class BankService extends EntityApiService<IBank> {
  updateStatus = (id: string, status: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${id}/active`), {
      enabled: status,
    });
  };
}

export default new BankService('/ms-sales/api/payment-settings/bank');
