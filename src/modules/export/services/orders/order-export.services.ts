import { format } from 'date-fns';
import { CommonOrderExport } from './common-order-export.service';
import { ApiClientService } from '@dfl/react-security';
import fileDownload from 'js-file-download';

export class OrderExportService extends CommonOrderExport<any> {
  ordersPreDispatchExportToExcel = (filters: any, search: any) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `pre-dispatch-${time}.xlsx`;
    return this._downloadDocument('/excel/pre-dispatch', name, filters, search);
  };

  ordersPreDispatchProviderExportToExcel = (filters: any, search: any, provider: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `pre-dispatch-provider-${time}.xlsx`;
    return this._downloadDocument('/excel/pre-dispatch-provider', name, filters, search, provider);
  };

  ordersPreDispatchExportToXml = (filters: any, search: any, provider: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `pre-dispatch-${time}.xml`;
    return this._downloadDocument('/xml/pre-dispatch', name, filters, search, provider);
  };

  ordersExportToExcel = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `orders-${time}.xlsx`;
    return this._downloadDocument('/excel/orders', name, filters, search);
  };

  ordersExportToSummaryExcel = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `orders-sumary-${time}.xlsx`;
    return this._downloadDocument('/excel/orders-sumary', name, filters, search);
  };

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

  clientsExportToExcel = (filters: any, search: string, name: string = 'clients') => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const _name = `${name}-${time}.xlsx`;
    return this._downloadDocument('/excel/clients', _name, filters, search);
  };

  ordersExportToXML = (filters: any, search: string | undefined) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `orders-${time}.xml`;
    return this._downloadDocument('/xml/orders', name, filters, search);
  };

  subOrdersExportToXML = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `suborders-${time}.xml`;
    return this._downloadDocument('/xml/sub-orders', name, filters, search);
  };

  conciliationExportToExcel = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `conciliation-${time}.xlsx`;
    return this._downloadDocument('/excel/sold-products', name, filters, search);
  };

  reportProductsExportToExcel = (filters: any, search: string, providerName?: string, providerType?: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `${(providerName || providerType) as string}-provider-${time}.xlsx`;
    return this._downloadDocument('/excel/analytic-product-list', name, filters, search, providerType);
  };

  reportProductsExportToXml = (filters: any, search: string, providerName?: string, providerType?: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `${(providerName || providerType) as string}-provider-${time}.xlsx`;
    return this._downloadDocument('/excel/analytic-product-list', name, filters, search, providerType);
  };

  conciliationProductExportToExcel = (
    filters: any,
    search: string,
    conciliationId: string | undefined,
    producer: string | undefined,
    segment: string,
  ) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `producer-conciliation-${time}.xlsx`;
    if (conciliationId && producer) {
      return this._downloadDocument(
        `/conciliation/${conciliationId}/producers/${producer}`,
        name,
        filters,
        search,
        undefined,
        segment,
      );
    }
  };

  conciliationLogisticExportToExcel = (
    filters: any,
    search: string,
    conciliationId: string | undefined,
    producer: string | undefined,
    segment: string,
  ) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `logistic-conciliation-${time}.xlsx`;
    if (conciliationId && producer) {
      return this._downloadDocument(
        `/conciliation/${conciliationId}/logistics/${producer}`,
        name,
        filters,
        search,
        undefined,
        segment,
      );
    }
  };

  conciliationCarrierExportToExcel = (
    filters: any,
    search: string,
    conciliationId: string | undefined,
    producer: string | undefined,
    segment: string,
  ) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `carrier-conciliation-${time}.xlsx`;
    if (conciliationId) {
      const basePath = producer
        ? `/conciliation/${conciliationId}/carriers`
        : `/conciliation/${conciliationId}/carriers`;
      return this._downloadDocument(basePath, name, filters, search, undefined, segment);
    }
  };

  conciliationProducerAllExportToExcel = (
    filters: any,
    search: string,
    conciliationId: string | undefined,
    segment: string,
  ) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `producer-all-conciliation-${time}.xlsx`;
    if (conciliationId) {
      return this._downloadDocument(
        `/conciliation/${conciliationId}/producers`,
        name,
        filters,
        search,
        undefined,
        segment,
      );
    }
  };

  conciliationLogisticAllExportToExcel = (
    filters: any,
    search: string,
    conciliationId: string | undefined,
    segment: string,
  ) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `logistic-all-conciliation-${time}.xlsx`;
    if (conciliationId) {
      return this._downloadDocument(
        `/conciliation/${conciliationId}/logistics`,
        name,
        filters,
        search,
        undefined,
        segment,
      );
    }
  };

  conciliationCarrierAllExportToExcel = (
    filters: any,
    search: string,
    conciliationId: string | undefined,
    segment: string,
  ) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `carrier-all-conciliation-${time}.xlsx`;
    if (conciliationId) {
      return this._downloadDocument(
        `/conciliation/${conciliationId}/carriers`,
        name,
        filters,
        search,
        undefined,
        segment,
      );
    }
  };

  /// INCIDENCES O ISSUES OF ORDERS

  issuesOrderExportToExcel = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `incidencias-${time}.xlsx`;
    return this._downloadDocument('/excel/issue-orders', name, filters, search);
  };

  // REIMBURSEMENT

  reimbursementOrderExportToExcel = (filters: any, search: string) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `devoluciones-${time}.xlsx`;
    return this._downloadDocument('/excel/reimbursement', name, filters, search);
  };

  conciliationCarrierMassDeliveryToExcel = (
    filters: any,
    search: string,
    providerId: string | undefined,
    segment: string,
    conciliationId: string | undefined,
  ) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `conciliacion-pago-por-acuerdo-${time}.xlsx`;
    if (conciliationId && providerId) {
      return this._downloadDocument(
        `/conciliation/${conciliationId}/carriers/${providerId}/mass-delivery`,
        name,
        filters,
        search,
        undefined,
        segment,
      );
    }
  };

  conciliationCarrierMassDeliveryAllToExcel = (
    filters: any,
    search: string,
    segment: string,
    conciliationId: string | undefined,
  ) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `conciliacion-pago-por-acuerdos-${time}.xlsx`;
    if (conciliationId) {
      return this._downloadDocument(
        `/conciliation/${conciliationId}/carriers/mass-delivery`,
        name,
        filters,
        search,
        undefined,
        segment,
      );
    }
  };

  exportToExcel = async (filters: any, search: any, isVariant: boolean, idStore?: string, isManufacturer?: boolean) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `products${time}.xlsx`;
    const { data } = await ApiClientService.post(
      // this.getPath(
      //   isManufacturer ? `/excel/products2` : idStore ? `/excel/products/${idStore}` : '/excel/products2',
      // ),
      this.getPath(idStore ? `/excel/products/${idStore}` : '/excel/products'),
      {
        filters,
        search,
        variant: isVariant,
      },
      { responseType: 'blob' },
    );
    return fileDownload(data, name);
  };

  exportToDocumentInventoryReport = async (params: any) => {
    const time = format(new Date(), 'dd-MM-yyyy');
    const name = `productsInventory${time}.xlsx`;
    const { data } = await ApiClientService.post(
      this.getPath('/analytic/products/snapshot-providers-list'),
      { ...params },
      { responseType: 'blob' },
    );
    return fileDownload(data, name);
  };
}

export default new OrderExportService('/ms-exports');
