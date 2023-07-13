import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { ICategory } from 'modules/store/settings/category/interfaces';

class CategoryService extends EntityApiService<ICategory> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<ICategory>> => {
    params.projections = {
      description: 0,
      visible: 0,
      order: 0,
    }
    params.sort = {
      parent: 1,
      order: 1,
    }
    return this.search(params, config).then(data => {
      data.data = data.data.map((item) => {
        if (!item.parent) {
          item.parent = item._id
        }
        return item;
      }).sort((a, b) => ((a?.parent as string) < (b?.parent as string)) ? -1 : 1)
      return data;
    })
  }

}

export default new CategoryService('/ms-inventory/api/categories');
