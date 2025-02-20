import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { REPORT_PRODUCT_DISCOUNT_ACTIVITY_HISTOGRAM } from 'modules/reports/constants/query-keys';
import { useHeaderFilterContext } from 'modules/reports/contexts/HeaderFilterContext';
import { ProductDiscountActivityService } from 'modules/reports/services';

export const useProductDiscountHistogram = (productDiscountId: string) => {
  const { interval } = useHeaderFilterContext();
  // const isEnabled = useMemo(() => [!!productDiscountId, !!interval].every(Boolean), [productDiscountId, interval]);
  const { fetch, queryKey } = useTableRequest(({ filters }, config) =>
    ProductDiscountActivityService.histogram(productDiscountId, { filters, interval }, config),
  );

  return useQuery([REPORT_PRODUCT_DISCOUNT_ACTIVITY_HISTOGRAM, queryKey?.filters, productDiscountId, interval], fetch, {
    // enabled: isEnabled,
  });
};
