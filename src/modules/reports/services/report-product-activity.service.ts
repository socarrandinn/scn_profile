import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { ACTIVITY_STOCK_METRIC_ENUM, PRODUCT_STOCK_METRIC_ENUM } from '../constants/metrics/inventory-stock-metric';
import { IStockActivityHistogram, IStockActivityReduction } from '../interfaces/IReportStockActivity';

class StockInventoryReportService extends EntityApiService<IProduct> {
  inventoryStockSummary = (productId: string, params?: any, config?: any): any => {
    return this.handleResponse(
      ApiClientService.post(
        this.getPath(`/summary/${productId}/${PRODUCT_STOCK_METRIC_ENUM.PRODUCT_STOCK_SUMMARY}`),
        params,
        config,
      ),
    );
  };

  inventoryActivityStockHistogram = (
    productId: string,
    params?: any,
    config?: any,
  ): Promise<IStockActivityHistogram[]> => {
    return this.handleResponse(
      ApiClientService.post(
        this.getPath(`/activity/${productId}/${ACTIVITY_STOCK_METRIC_ENUM.ACTIVITY_STOCK_HISTOGRAM}`),
        params,
        config,
      ),
    );
  };

  inventoryActivityStockTopUser = (productId: string, params?: any, config?: any): any => {
    return this.handleResponse(
      ApiClientService.post(
        this.getPath(`/activity/${productId}/${ACTIVITY_STOCK_METRIC_ENUM.ACTIVITY_STOCK_TOP_USER}`),
        params,
        config,
      ),
    );
  };

  inventoryActivityStockReduction = (
    productId: string,
    params?: any,
    config?: any,
  ): Promise<IStockActivityReduction[]> => {
    return this.handleResponse(
      ApiClientService.post(
        this.getPath(`/activity/${productId}/${ACTIVITY_STOCK_METRIC_ENUM.ACTIVITY_STOCK_REDUCTION}`),
        params,
        config,
      ),
    );
  };
}

export default new StockInventoryReportService('/ms-inventory/api/stock/analytics');
