import { Avatar, Stack } from '@mui/material';
import OFFER_IMAGES from 'assets/images/offers';
import OfferOrderIcon from 'components/libs/Icons/OfferOrderIcon';
import { TransTypography } from 'components/TransTypography';

const SaleOfferInactive = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 1,
        padding: {
          xs: 4,
          md: 8,
        },
      }}
    >
      <Avatar
        src={OFFER_IMAGES.inactiveOffer}
        variant='square'
        sx={{
          width: 200,
          height: 200,
          backgroundColor: 'transparent',
          '& .MuiAvatar-img': {
            objectFit: 'contain',
            objectPosition: 'center',
          },
        }}
      >
        <OfferOrderIcon />
      </Avatar>
      <TransTypography
        sx={{ fontSize: { xs: 18, md: 23 }, fontWeight: 600 }}
        message='offerOrder:details:offerInactive:title'
      />
      <TransTypography
        textAlign={'center'}
        sx={{ maxWidth: 450 }}
        message='offerOrder:details:offerInactive:subtitle'
      />
    </Stack>
  );
};

export default SaleOfferInactive;
