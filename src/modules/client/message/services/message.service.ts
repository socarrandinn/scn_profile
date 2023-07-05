import { EntityApiService } from '@dfl/react-security';
import { IMessage } from 'modules/client/message/interfaces';

class MessageService extends EntityApiService<IMessage> {}

export default new MessageService('/ms-client/api');
