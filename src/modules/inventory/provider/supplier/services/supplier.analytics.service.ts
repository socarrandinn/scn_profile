import { ApiClientService, EntityApiService } from '@dfl/react-security';

export const round = (value: number) => {
  const s = Math.pow(10, 2);
  return Math.round(value * s) / s;
};

class SupplierAnalyticsService extends EntityApiService<any> {
  getSupplierReportSaleByLocation = (supplierProductId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/summary/by-location/${supplierProductId}`), params, config));
  };

  getSupplierReportSalePercentByLocation = (supplierProductId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/summary/percent-by-location/${supplierProductId}`), params, config));
  };

  getSupplierReportSaleByDays = (supplierProductId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/summary/by-days/${supplierProductId}`), params, config));
  };

  getSupplierReportSaleByCountry = (supplierProductId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/summary/by-country/${supplierProductId}`), params, config));
  };

  /*   getReportSaleByLocation = (supplierProductId: string, params: any): Promise<any> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/summary/transactionByTypeHistogram'), params)).then(
      (data) => {
        return histogramWithDate(data, '_id.type', ['count'], {
          name: '',
          interval: params.interval,
        });
      },
    );
  }; */

  /* getTransactionAmountHistogram = (params: any): Promise<any> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/summary/transactionByTypeHistogram'), params)).then(
      (data) => {
        return histogramWithDate(data, '_id.type', ['amount'], {
          name: '',
          interval: params.interval,
          options: {
            dataLabels: {
              enabled: true,
              formatter: function (val: number) {
                return `$${round(Number(val))}`;
              },
            },
            tooltip: {
              y: {
                formatter: function (val: number) {
                  return `$${round(Number(val))}`;
                },
              },
            },
          },
        });
      },
    );
  };

  getBalanceTotal = (params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath('/summary/balanceTotal'), params, config));
  }; */
}

export default new SupplierAnalyticsService('/ms-wallet-admin/api/analytics');
