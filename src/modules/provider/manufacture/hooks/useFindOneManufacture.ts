import { useQuery } from '@tanstack/react-query';
import { ManufactureService } from 'modules/provider/manufacture/services';
import { MANUFACTURES_ONE_KEY } from 'modules/provider/manufacture/constants';
import { useCallback } from 'react';
import { IManufacture } from 'modules/provider/manufacture/interfaces';

export const useFindOneManufacture = (id: string | null) => {
  const fetch = useCallback(() => ManufactureService.getOne(id as string), [id]);
  return useQuery<IManufacture>([id, MANUFACTURES_ONE_KEY], fetch, { enabled: !!id });
};
