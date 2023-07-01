import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { ICategory } from 'modules/store/settings/category/interfaces';

class CategoryService extends EntityApiService<ICategory> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<ICategory>> => {
    params.projections = {
      description: 0,
      visible: 0,
      order: 0,
      parent: 0,
    }
    return this.search(params, config)
  }
}

export default new CategoryService('/ms-inventory/api/categories');
