import { OrderCommonService } from 'modules/sales/common/services';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { format } from 'date-fns';
import { ApiClientService } from '@dfl/react-security';
import fileDownload from 'js-file-download';
import { ISubOrderDriver } from '../interfaces';

class SubOrderService extends OrderCommonService<IOrder> {
  exportToPDF = (filters: any) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `suborders-${time}.pdf`;
    return ApiClientService.post(this.getPath('/pdfBulk?admin=true'), { filters }, { responseType: 'blob' }).then(
      ({ data }) => {
        fileDownload(data, name);
      },
    );
  };

  ticketDeliveryExport = (filters: any) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `ticket-${time}.pdf`;
    return ApiClientService.post(
      this.getPath('/ticket-delivery/?admin=true'),
      { filters },
      { responseType: 'blob' },
    ).then(({ data }) => {
      fileDownload(data, name);
    });
  };

  updateDriver = (payload: ISubOrderDriver) => {
    const { _id, ...rest } = payload;
    if (_id) {
      return ApiClientService.post(this.getPath(`/${_id}/driver`), rest);
    }
    throw new Error('Suborder id is required');
  };
}

export default new SubOrderService('/ms-sales/api/suborder');
