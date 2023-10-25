import { EntityApiService } from '@dfl/react-security';
import { IWorkLocation } from 'modules/inventory/product/settings/work-location/interfaces';

class WorkLocationService extends EntityApiService<IWorkLocation> {}

export default new WorkLocationService('/ms-rrhh/api/work-locations');
