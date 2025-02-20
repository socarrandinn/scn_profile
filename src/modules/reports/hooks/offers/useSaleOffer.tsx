import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { REPORT_SALE_OFFER_ACTIVITY_HISTOGRAM } from 'modules/reports/constants/query-keys';
import { useHeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';
import { SaleOfferActivityService } from 'modules/reports/services';

export const useSaleOfferHistogramData = (productDiscountId: string) => {
  const { interval } = useHeaderFilterContext();
  // const isEnabled = useMemo(() => [!!productDiscountId, !!interval].every(Boolean), [productDiscountId, interval]);
  const { fetch, queryKey } = useTableRequest(({ filters }, config) =>
    SaleOfferActivityService.histogram(productDiscountId, { filters, interval }, config),
  );

  return useQuery([REPORT_SALE_OFFER_ACTIVITY_HISTOGRAM, queryKey?.filters, productDiscountId, interval], fetch, {
    // enabled: isEnabled,
  });
};
