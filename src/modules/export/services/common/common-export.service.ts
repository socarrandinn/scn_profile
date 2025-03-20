import { ApiClientService, EntityApiService } from '@dfl/react-security';
import fileDownload from 'js-file-download';
import { isEmpty } from 'lodash';

export class CommonExport<T> extends EntityApiService<T> {
  _downloadDocument = (
    basePath: string,
    name: string,
    filters?: any,
    search?: string,
    provider?: string,
    segment?: string,
  ) => {
    const query: any = {};
    if (!isEmpty(filters)) query.filters = filters;
    if (search) query.search = search;
    query.segment = segment;
    if (provider) query.provider = provider;
    return ApiClientService.post(this.getPath(basePath), query, {
      responseType: 'blob',
    }).then(({ data }) => {
      fileDownload(data, name || 'exportExcel.xlsx');
    });
  };
}
