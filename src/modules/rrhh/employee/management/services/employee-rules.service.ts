import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';

class EmployeeRulesService extends EntityApiService<string> {
  search = async (params?: any, config?: RequestConfig): Promise<SearchResponseType<string>> => {
    // const size = params?.size || 20;
    const search = params.search;
    try {
      // todo
      throw new Error('Not implement yet');

      // const result = await this.handleSearchResponse(ApiClientService.post(this.getPath('/search'), params, config), size);
      // const isThere = search ? result.data.some(item => item.toLowerCase() === search.toLowerCase()) : true;
      // if (!isThere) {
      //   result.data.push(search);
      // }
      // return result;
    } catch (e) {
      const data = search ? [search] : [];
      return {
        data,
        hasMore: true,
        total: 500,
      };
    }
  };

  searchTypes = async (params?: any, config?: RequestConfig): Promise<SearchResponseType<string>> => {
    // const size = params?.size || 20;
    const search = params.search;
    try {
      // todo
      throw new Error('Not implement yet');

      // const result = await this.handleSearchResponse(ApiClientService.post(this.getPath('/search'), params, config), size);
      // const isThere = search ? result.data.some(item => item.toLowerCase() === search.toLowerCase()) : true;
      // if (!isThere) {
      //   result.data.push(search);
      // }
      // return result;
    } catch (e) {
      const data = search ? [search] : [];
      return {
        data,
        hasMore: true,
        total: 500,
      };
    }
  };
}

export default new EmployeeRulesService('/ms-rrhh/api/rules');
