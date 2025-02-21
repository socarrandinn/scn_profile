import { LongText } from '@dfl/mui-react-common';
import { Avatar, Paper, Stack } from '@mui/material';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import { OfferIcon } from 'modules/sales/common/components/icons';

type Props = {
  showEdit?: boolean;
};
const SaleOfferCouponCode = ({ showEdit }: Props) => {
  const { offer } = useOfferContext();
  return (
    <Paper
      sx={{
        padding: { xs: 1, md: '16px 20px' },
        mt: 2,
        backgroundColor: 'primary.main',
        color: 'common.white',
      }}
    >
      <Stack flexDirection={{ xs: 'column', sm: 'row' }} gap={2} sx={{ alignItems: 'center' }}>
        <Avatar variant='square' sx={{ width: 30, height: 30, backgroundColor: 'transparent' }}>
          <OfferIcon />
        </Avatar>
        <LongText variant='h1' lineHeight={1} lineClamp={1} text={offer?.code} />
      </Stack>
    </Paper>
  );
};

export default SaleOfferCouponCode;
