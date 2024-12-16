import { format } from 'date-fns';
import { ApiClientService } from '@dfl/react-security';
import fileDownload from 'js-file-download';
import { CommonExport } from '../common/common-export.service';
import { ExportProps, ExportProviderProps } from 'modules/export/interfaces/common-export';

type ExportExcelProps = {
  pathName?: string;
  name?: string;
};

export class ProductExportService extends CommonExport<any> {
  exportToExcel = async ({ name, pathName, ...payload }: ExportExcelProps & ExportProps) => {
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

  exportToExcelSupplier = async (payload: ExportProps) => {
    await this.exportToExcel({ ...payload, pathName: '/provider/suppliers/export', name: 'supplier' });
  };

  exportToExcelSupplierProduct = async (payload: ExportProviderProps) => {
    const { providerId, ...rest } = payload;
    if (providerId) {
      await this.exportToExcel({ ...rest, pathName: `/products/${providerId}/export`, name: 'product_supplier' });
      return
    }
    throw new Error('You must be inside a supplier _id');
  };

  exportToExcelLogisticProduct = async (payload: ExportProviderProps) => {
    const { providerId, ...rest } = payload;
    if (providerId) {
      await this.exportToExcel({ ...rest, pathName: `/products/${providerId}/export`, name: 'product_logistic' });
      return
    }
    throw new Error('You must be inside a logistic _id');
  };
}

export default new ProductExportService('/ms-inventory/api');
