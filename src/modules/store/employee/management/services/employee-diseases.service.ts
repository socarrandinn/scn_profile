import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';

export class EmployeeDiseasesServiceClass extends EntityApiService<string> {
  searchInclude = async (params?: any, config?: RequestConfig): Promise<SearchResponseType<string>> => {
    const search = params.search;
    try {
      const result = await this.search(params, config);
      const isThere = search ? result.data.some(item => item.toLowerCase() === search.toLowerCase()) : true;
      if (!isThere) {
        result.data.push(search);
      }
      return {
        data: result.data,
        hasMore: true,
        total: 500,
      };
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

export default new EmployeeDiseasesServiceClass('/ms-rrhh/api/employees/diseases');
