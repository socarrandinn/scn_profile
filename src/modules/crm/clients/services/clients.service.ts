import { EntityApiService } from '@dfl/react-security';
import { IClients } from 'modules/crm/clients/interfaces';

class ClientsService extends EntityApiService<IClients> {}

export default new ClientsService('/ms-crm/api/clients');
