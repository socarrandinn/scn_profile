import { IconButton, LongText } from '@dfl/mui-react-common';
import { Edit, LocalOfferOutlined } from '@mui/icons-material';
import { Avatar, Box, Stack } from '@mui/material';
import OFFER_IMAGES from 'assets/images/offers';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import { useTranslation } from 'react-i18next';

type Props = {
  showEdit?: boolean;
};
const SaleOfferSummaryDetail = ({ showEdit }: Props) => {
  const { offer } = useOfferContext();
  const { t } = useTranslation();
  return (
    <PaperTabView>
      <Stack flexDirection={{ xs: 'column', sm: 'row' }} gap={2} sx={{ position: 'relative' }}>
        <Avatar
          src={OFFER_IMAGES.start}
          variant='square'
          sx={{ width: 30, height: 30, backgroundColor: 'transparent' }}
        >
          <LocalOfferOutlined />
        </Avatar>
        <Stack gap={1} flex={1}>
          <LongText lineClamp={2} fontWeight={600} text={offer?.description} />
          <LongText lineClamp={3} text={offer?.promotionText} />
        </Stack>
        {showEdit && (
          <Box sx={{ mt: -1 }}>
            <IconButton size='small' tooltip={t('edit')} color='primary'>
              <Edit fontSize='small' />
            </IconButton>
          </Box>
        )}
      </Stack>
    </PaperTabView>
  );
};

export default SaleOfferSummaryDetail;
