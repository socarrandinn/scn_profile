import { EntityApiService } from '@dfl/react-security';
import { IIncidenceComment } from 'modules/sales/incidence/interfaces';

class IncidenceCommentsService extends EntityApiService<IIncidenceComment> {
}

export default new IncidenceCommentsService('/ms-sales/api/incidence/comments');
