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
import { useMemo } from 'react';

export const useInventoryStockSummary = (productId: string) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    StockInventoryReportService.inventoryStockSummary(productId, {}, config),
  );

  return useQuery([REPORT_PRODUCT_STOCK_SUMMARY, queryKey?.filters, productId], fetch, {
    enabled: !!productId,
  });
};

export const useInventoryStockHistogram = (productId: string) => {
  const { interval } = useHeaderFilterContext();
  const isEnabled = useMemo(() => [!!productId, !!interval].every(Boolean), [productId, interval]);
  const { fetch, queryKey } = useTableRequest(({ filters }, config) =>
    StockInventoryReportService.inventoryActivityStockHistogram(productId, { filters, interval }, config),
  );

  return useQuery([REPORT_PRODUCT_STOCK_ACTIVITY_HISTOGRAM, queryKey?.filters, productId, interval], fetch, {
    enabled: isEnabled,
  });
};

export const useInventoryStockTopUser = (productId: string) => {
  const { interval } = useHeaderFilterContext();
  const isEnabled = useMemo(() => [!!productId, !!interval].every(Boolean), [productId, interval]);
  const { fetch, queryKey } = useTableRequest(({ filters }, config) =>
    StockInventoryReportService.inventoryActivityStockTopUser(productId, { filters, interval }, config),
  );

  return useQuery([REPORT_PRODUCT_STOCK_ACTIVITY_TOP_USER, queryKey?.filters, productId, interval], fetch, {
    enabled: isEnabled,
  });
};

export const useInventoryStockReduction = (productId: string) => {
  const { interval } = useHeaderFilterContext();
  const isEnabled = useMemo(() => [!!productId, !!interval].every(Boolean), [productId, interval]);
  const { fetch, queryKey } = useTableRequest(({ filters }, config) =>
    StockInventoryReportService.inventoryActivityStockReduction(productId, { filters, interval }, config),
  );

  return useQuery([REPORT_PRODUCT_STOCK_ACTIVITY_REDUCTION, queryKey?.filters, productId, interval], fetch, {
    enabled: isEnabled,
  });
};
