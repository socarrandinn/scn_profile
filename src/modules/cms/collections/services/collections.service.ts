import { EntityApiService } from '@dfl/react-security';
import { ICollections } from 'modules/cms/collections/interfaces';

class CollectionsService extends EntityApiService<ICollections> {}

export default new CollectionsService('/ms-cms/api/collections');
