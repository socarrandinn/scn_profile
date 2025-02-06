import { IAddress } from 'modules/common/interfaces';
import AddressMap from './AddressMap';
import AddressMapMarket from './AddressMapMarket';
import { Box, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { grey } from '@mui/material/colors';

type Props = {
  address: IAddress;
};

const AddressMapView = ({ address }: Props) => {
  const { t } = useTranslation('common');
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
      <Typography>
        {t('common:fields.address.formattedAddress')}
        {': '}
        <Box
          component={'span'}
          fontWeight={600}
          sx={{
            padding: 1,
            backgroundColor: grey[100],
            borderRadius: 0.5,
          }}
        >
          {address?.formattedAddress}
        </Box>
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
