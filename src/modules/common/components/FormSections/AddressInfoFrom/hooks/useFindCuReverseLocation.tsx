/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import { useQuery } from '@tanstack/react-query';
import { AddressService } from 'modules/common/service';

type Props = {
  lng?: number;
  lat?: number;
  countryCode?: string;
  updateMarker?: boolean;
};

const CU_ADDRESS_POI_QUERY_KEY = 'cu-address-poi';

const useFindCuReverseLocation = ({ lng, lat, countryCode, updateMarker }: Props) => {
  return useQuery({
    queryKey: [CU_ADDRESS_POI_QUERY_KEY, lng, lat, countryCode, updateMarker],
    // @ts-ignore
    queryFn: () => AddressService.getCuPoi(lng, lat),
    // @ts-ignore
    enabled: !!(lng && lat && countryCode === 'CU' && updateMarker),
  });
};

export default useFindCuReverseLocation;
