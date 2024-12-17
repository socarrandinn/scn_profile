import { CommonDownloadService } from '../common/common-download.service';

export class InventoryDownloadService extends CommonDownloadService<any> {
  _downloadFileToExcel = (path: string, name?: string) =>
    this.downloadFileToExcel({
      name: name ?? 'products',
      path: `/download/${path}`,
    });

  // inicial path export
  _getExportPath = (params: any, path?: string) => this.getExportPath(path ?? '/products/export', params);

  _generateDownload = () => this.generateDownload('/products/export/');
}

export default new InventoryDownloadService('/ms-inventory/api');
