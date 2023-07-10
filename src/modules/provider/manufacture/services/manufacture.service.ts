import { EntityApiService } from '@dfl/react-security';
import { IManufacture } from 'modules/provider/manufacture/interfaces';

class ManufactureService extends EntityApiService<IManufacture> {}

export default new ManufactureService('/ms-inventory/api/manufactures');
