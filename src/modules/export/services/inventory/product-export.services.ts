import { format } from 'date-fns';
import { ApiClientService } from '@dfl/react-security';
import fileDownload from 'js-file-download';
import { CommonExport } from '../common/common-export.service';
import { ProductExportPayloadProps } from 'modules/export/interfaces/common-export';

export class ProductExportService extends CommonExport<any> {
  exportToExcel = async (payload: ProductExportPayloadProps, isVariant: boolean) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const _name = `products_${time}.xlsx`;
    const { data } = await ApiClientService.post(
      this.getPath('/products/export'),
      {
        ...payload,
        variant: isVariant,
      },
      { responseType: 'blob' },
    );
    fileDownload(data, _name);
  };
}

export default new ProductExportService('/ms-inventory/api');
