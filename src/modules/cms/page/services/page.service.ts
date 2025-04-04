import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IPage } from 'modules/cms/page/interfaces';
import { PAGE_STATUS_ENUM } from '../constants/page-status';

class PageService extends EntityApiService<IPage> {
  updateStatus = (id: string, status: PAGE_STATUS_ENUM) => {
    return ApiClientService.patch(this.getPath(`/${id}`), {
      status,
    });
  };
}

export default new PageService('/ms-cms/api/admin/pages');
