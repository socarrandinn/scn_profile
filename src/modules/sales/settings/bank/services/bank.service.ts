import { EntityApiService } from '@dfl/react-security';
import { IBank } from 'modules/sales/settings/bank/interfaces';

class BankService extends EntityApiService<IBank> {}

export default new BankService('/ms-sales/payment-settings/bank');
