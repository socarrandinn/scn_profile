import { EntityApiService } from '@dfl/react-security';
import { IWorkLocation } from 'modules/rrhh/settings/work-location/interfaces';

class WorkLocationService extends EntityApiService<IWorkLocation> {}

export default new WorkLocationService('/ms-rrhh/api/work-locations');
