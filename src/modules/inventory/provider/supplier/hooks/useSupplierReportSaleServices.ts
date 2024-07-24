import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useDashboardFilter } from 'components/libs/analytic/hooks/useDashboardFilter';
import { useReportSaleContext } from '../context/ReportSaleProvider';
import { SupplierAnalyticsService } from '../services';
import { useProviderProductsDetail } from '../context/ProviderProductDetail';
import { SUPPLIER_ANALYTIC_REPORT_SALE } from '../constants';

export const useSupplierReportSaleByLocation = () => {
  const { interval } = useReportSaleContext();
  const payload = useDashboardFilter();
  const { providerProductsId } = useProviderProductsDetail();

  const fetch = useCallback(
    () =>
      SupplierAnalyticsService.getSupplierReportSaleByLocation(providerProductsId as string, { ...payload, interval }),
    [interval, payload, providerProductsId],
  );

  return useQuery<any>([SUPPLIER_ANALYTIC_REPORT_SALE, payload, interval], fetch, {
    refetchInterval: 30000,
    staleTime: 10000,
    enabled: !!providerProductsId,
  });
};

export const useSupplierReportSalePercentByLocation = () => {
  const { interval } = useReportSaleContext();
  const payload = useDashboardFilter();
  const { providerProductsId } = useProviderProductsDetail();

  const fetch = useCallback(
    () =>
      SupplierAnalyticsService.getSupplierReportSalePercentByLocation(providerProductsId as string, {
        ...payload,
        interval,
      }),
    [interval, payload, providerProductsId],
  );

  return useQuery<any>([SUPPLIER_ANALYTIC_REPORT_SALE, payload, interval], fetch, {
    refetchInterval: 30000,
    staleTime: 10000,
    enabled: !!providerProductsId,
  });
};

export const useSupplierReportSaleByDays = () => {
  const { interval } = useReportSaleContext();
  const payload = useDashboardFilter();
  const { providerProductsId } = useProviderProductsDetail();

  const fetch = useCallback(
    () => SupplierAnalyticsService.getSupplierReportSaleByDays(providerProductsId as string, { ...payload, interval }),
    [interval, payload, providerProductsId],
  );

  return useQuery<any>([SUPPLIER_ANALYTIC_REPORT_SALE, payload, interval], fetch, {
    refetchInterval: 30000,
    staleTime: 10000,
    enabled: !!providerProductsId,
  });
};
export const useSupplierReportSaleByCountry = () => {
  const { interval } = useReportSaleContext();
  const payload = useDashboardFilter();
  const { providerProductsId } = useProviderProductsDetail();

  const fetch = useCallback(
    () =>
      SupplierAnalyticsService.getSupplierReportSaleByCountry(providerProductsId as string, { ...payload, interval }),
    [interval, payload, providerProductsId],
  );

  return useQuery<any>([SUPPLIER_ANALYTIC_REPORT_SALE, payload, interval], fetch, {
    refetchInterval: 30000,
    staleTime: 10000,
    enabled: !!providerProductsId,
  });
};

/* export const useHomeTransactionAmountHistogram = () => {
  const { interval } = useDashboard()
  const payload = useDashboardFilter()

  const fetch = useCallback(() => AnalyticsService.getTransactionAmountHistogram({ ...payload, interval }), [payload]);

  return useQuery<any>([ANALYTICS_TRANSACTION, ANALYTICS_TRANSACTION_HISTOGRAM, ANALYTICS_TRANSACTION_AMOUNT_HISTOGRAM, payload, interval], fetch, {
    refetchInterval: 30000,
    staleTime: 10000
  });
}; */
