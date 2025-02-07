import { IAddress } from 'modules/common/interfaces';
import AddressMap from './AddressMap';
import AddressMapMarket from './AddressMapMarket';
import { Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { grey } from '@mui/material/colors';
import { getFormatterInternacionalAddress } from 'utils/address-geo';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { COUNTRIES } from 'constants/COUNTRIES';

type Props = {
  address: IAddress;
};

const AddressMapView = ({ address }: Props) => {
  const _formattedAddress = useMemo(() => {
    if (MS_LOCATION_CONFIG.isCuban) {
      return address?.formattedAddress;
    }
    const country = COUNTRIES?.find((c) => c.code === address?.country);
    return getFormatterInternacionalAddress(address, country?.name);
  }, [address]);
  const coordinates = useMemo(() => {
    const c = address?.location?.coordinates;
    return {
      lat: (c?.[0] as number) || 0,
      lng: (c?.[1] as number) || 0,
    };
  }, [address?.location?.coordinates]);
  return (
    <Stack
      gap={2}
      sx={{
        padding: {
          xs: 1,
          md: 2,
        },
      }}
    >
      <Typography
        fontWeight={600}
        sx={{
          padding: 1,
          backgroundColor: grey[100],
          borderRadius: 0.5,
        }}
      >
        {_formattedAddress}
      </Typography>

      {coordinates && (
        <AddressMap
          {...coordinates}
          className='w-full h-[300px]'
          market={<AddressMapMarket position={coordinates} />}
        />
      )}
    </Stack>
  );
};

export default AddressMapView;
