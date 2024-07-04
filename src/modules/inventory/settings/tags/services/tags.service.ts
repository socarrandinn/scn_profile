import { EntityApiService } from '@dfl/react-security';
import { ITags } from 'modules/inventory/settings/tags/interfaces';

class TagsService extends EntityApiService<ITags> {}

export default new TagsService('/ms-inventory/api/tags');
