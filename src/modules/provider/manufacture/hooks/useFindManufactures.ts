import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ManufactureService } from 'modules/provider/manufacture/services';
import { MANUFACTURES_LIST_KEY } from 'modules/provider/manufacture/constants';

export const useFindManufactures = () => {
  const { fetch, queryKey } = useTableRequest(ManufactureService.search);

  return useQuery([MANUFACTURES_LIST_KEY, queryKey], fetch);
};
