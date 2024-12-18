import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductFeatureService } from '../services';
import { PRODUCT_FEATURE_LIST_KEY } from '../constants/product-feature.queries';

export const useFindProductFeatures = () => {
  const { fetch, queryKey } = useTableRequest(ProductFeatureService.search);

  return useQuery([PRODUCT_FEATURE_LIST_KEY, queryKey], fetch);
};
