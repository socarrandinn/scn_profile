import { IAddress } from 'modules/common/interfaces';
import AddressMap from './AddressMap';
import AddressMapMarket from './AddressMapMarket';
import { Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { grey } from '@mui/material/colors';
import FormattedAddressCell from 'components/AddressCell/FormattedAddressCell';

type Props = {
  address: IAddress;
};

const AddressMapView = ({ address }: Props) => {
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
        <FormattedAddressCell address={address} lineClamp={4} />
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
