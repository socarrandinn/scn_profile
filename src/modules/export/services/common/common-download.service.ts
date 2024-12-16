import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { format } from 'date-fns';
import fileDownload from 'js-file-download';
import { ICommonDownload } from 'modules/export/interfaces/common-export';

export class CommonDownloadService<T> extends EntityApiService<T> {
  getExportPath = (path = '', params = {}): Promise<any> => {
    return this.handleResponse(ApiClientService.post(this.getPath(path ?? '/export'), params));
  };

  generateDownload = (path: string): Promise<any> => {
    return this.handleResponse(ApiClientService.get(this.getPath(path)));
  };

  downloadFileToExcel = ({ name, path }: ICommonDownload) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const _name = `${name}_${time}.xlsx`;
    return ApiClientService.get(this.getPath(`/download/${path}`), { responseType: 'blob' }).then(({ data }) => {
      fileDownload(data, _name);
    });
  };
}
