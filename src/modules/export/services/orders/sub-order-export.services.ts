import { format } from 'date-fns';
import { CommonOrderExport } from './common-order-export.service';

export class SubOrderExportService extends CommonOrderExport<any> {
  subOrdersExportToExcel = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `suborders-${time}.xlsx`;
    return this._downloadDocument('/excel/sub-orders', name, filters, search);
  };

  subOrdersExportToExcelForDrivers = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `suborders-${time}.xlsx`;
    return this._downloadDocument('/excel/sub-orders-drivers', name, filters, search);
  };

  subscriptionsExportToExcel = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `subscriptions-${time}.xlsx`;
    return this._downloadDocument('/excel/subscriptions', name, filters, search);
  };

  subOrdersExportToXML = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `suborders-${time}.xml`;
    return this._downloadDocument('/xml/sub-orders', name, filters, search);
  };
}

export default new SubOrderExportService('/ms-exports');
