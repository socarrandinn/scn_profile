import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { getProvinceByCode } from 'utils/location';

type Props = {
  value: string;
};
export const renderDispatchRegion = ({ value }: Props) => {
  if (MS_LOCATION_CONFIG.isCuban) {
    const state = getProvinceByCode(Number(value));
    return state || value;
  }

  return value;
};
