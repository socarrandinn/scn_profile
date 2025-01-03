import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { ProductFeatureService } from '../services';
import { PRODUCT_FEATURE_ONE_KEY } from '../constants/product-feature.queries';
import { IProductFeature } from '../interfaces/IProductFeature';

export const useFindOneProductFeatures = (id: string | null) => {
  const fetch = useCallback(() => ProductFeatureService.getOne(id as string), [id]);
  return useQuery<IProductFeature>([id, PRODUCT_FEATURE_ONE_KEY], fetch, { enabled: !!id });
};
