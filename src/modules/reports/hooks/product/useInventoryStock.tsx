import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import {
  REPORT_PRODUCT_STOCK_ACTIVITY_HISTOGRAM,
  REPORT_PRODUCT_STOCK_ACTIVITY_REDUCTION,
  REPORT_PRODUCT_STOCK_ACTIVITY_TOP_USER,
  REPORT_PRODUCT_STOCK_SUMMARY,
} from 'modules/reports/constants/query-keys';
import { useHeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';
import { StockInventoryReportService } from 'modules/reports/services';

export const useInventoryStockSummary = (productId: string) => {
  const { interval } = useHeaderFilterContext();

  const { fetch, queryKey } = useTableRequest((params, config) =>
    StockInventoryReportService.inventoryStockSummary(productId, { ...params, interval }, config),
  );

  return useQuery([REPORT_PRODUCT_STOCK_SUMMARY, queryKey, productId, interval], fetch, {
    enabled: !!productId,
  });
};

export const useInventoryStockHistogram = (productId: string) => {
  const { interval } = useHeaderFilterContext();
  const { fetch, queryKey } = useTableRequest((params, config) =>
    StockInventoryReportService.inventoryActivityStockHistogram(productId, { ...params, interval }, config),
  );

  return useQuery([REPORT_PRODUCT_STOCK_ACTIVITY_HISTOGRAM, queryKey, productId, interval], fetch, {
    enabled: !!productId,
  });
};

export const useInventoryStockTopUser = (productId: string) => {
  const { interval } = useHeaderFilterContext();
  const { fetch, queryKey } = useTableRequest((params, config) =>
    StockInventoryReportService.inventoryActivityStockTopUser(productId, { ...params, interval }, config),
  );

  return useQuery([REPORT_PRODUCT_STOCK_ACTIVITY_TOP_USER, queryKey, productId, interval], fetch, {
    enabled: !!productId,
  });
};

export const useInventoryStockReduction = (productId: string) => {
  const { interval } = useHeaderFilterContext();
  const { fetch, queryKey } = useTableRequest((params, config) =>
    StockInventoryReportService.inventoryActivityStockReduction(productId, { ...params, interval }, config),
  );

  return useQuery([REPORT_PRODUCT_STOCK_ACTIVITY_REDUCTION, queryKey, productId, interval], fetch, {
    enabled: !!productId,
  });
};
