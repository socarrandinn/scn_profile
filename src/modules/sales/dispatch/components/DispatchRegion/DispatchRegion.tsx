import { MS_LOCATION_CONFIG } from 'settings/address-location';

type Props = {
  value: string;
};
export const renderDispatchRegion = ({ value }: Props) => {
  if (MS_LOCATION_CONFIG.isCuban) return value;

  return value;
};
