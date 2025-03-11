import { EntityApiService } from '@dfl/react-security';
import { IDispatch } from 'modules/sales/dispatch/interfaces';

class DispatchService extends EntityApiService<IDispatch> {}

export default new DispatchService('/ms-sales/api/dispatch');
