import { format } from 'date-fns';
import { ApiClientService } from '@dfl/react-security';
import fileDownload from 'js-file-download';
import { CommonExport } from '../common/common-export.service';
import { ExportProps } from 'modules/export/interfaces/common-export';

type ExportExcelProps = ExportProps & {
  pathName?: string;
  name?: string;
};

export class ProductExportService extends CommonExport<any> {
  exportToExcel = async ({ name, pathName, ...payload }: ExportExcelProps) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const _name = `${name ?? 'products'}_${time}.xlsx`;
    const { data } = await ApiClientService.post(
      this.getPath(pathName ?? '/products/export'),
      {
        ...payload,
      },
      { responseType: 'blob' },
    );
    fileDownload(data, _name);
  };

  exportToExcelProduct = async (payload: ExportProps) => {
    await this.exportToExcel({ ...payload, pathName: '/products/export', name: 'products' });
  };

  exportToExcelSupplierProduct = async (payload: ExportProps) => {
    await this.exportToExcel({ ...payload, pathName: '/provider/suppliers/export', name: 'supplier_products' });
  };
}

export default new ProductExportService('/ms-inventory/api');
