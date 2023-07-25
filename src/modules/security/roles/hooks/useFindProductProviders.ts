import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProductProvidersService } from '../services';

export const useFindProductProviders = () => {
    const { fetch, queryKey } = useTableRequest(ProductProvidersService.search);

    return useQuery(['product-providers', 'product-providers', queryKey], fetch);
};
