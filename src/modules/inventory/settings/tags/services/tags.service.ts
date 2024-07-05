import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ITags } from 'modules/inventory/settings/tags/interfaces';

class TagsService extends EntityApiService<ITags> {
  updateStatus = (payload: Partial<ITags>): any => {
    return ApiClientService.patch(this.getPath(`/${payload?._id as string}`), {
      ...payload,
    });
  };
}

export default new TagsService('/ms-inventory/api/tags');
