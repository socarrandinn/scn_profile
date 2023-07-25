import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { LogisticProvidersService, ProductProvidersService } from '../services';

// export const useFindProductProviders = (providerType: string) => {
//   let fetch, queryKey;
//   if (providerType === 'PRODUCT') {
//     let { fetch, queryKey } = useTableRequest(ProductProvidersService.search);
//     fetch = fetch;
//     queryKey = queryKey;
//   } else if (providerType === 'LOGISTIC') {
//     let { fetch, queryKey } = useTableRequest(LogisticProvidersService.search);
//     fetch = fetch;
//     queryKey = queryKey;
//   }
//   return useQuery([providerType, `${providerType}-providers`, queryKey], fetch);
// };

export const useFindProductProviders = (providerType: string | undefined) => {
    // providerType = 'PRODUCT'
    // const { fetch, queryKey } = useTableRequest(ProductProvidersService.search);
    console.log("providerType -->", providerType);
    const { fetch, queryKey } = useTableRequest(
        providerType === 'PRODUCT'
            ? ProductProvidersService.search
            : LogisticProvidersService.search
    );
    return useQuery([providerType, `${providerType}-providers`, queryKey], fetch);

};
