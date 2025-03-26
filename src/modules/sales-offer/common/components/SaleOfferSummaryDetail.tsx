import { LongText } from '@dfl/mui-react-common';
import { LocalOfferOutlined } from '@mui/icons-material';
import { Avatar, Stack } from '@mui/material';
import OFFER_IMAGES from 'assets/images/offers';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import OfferMessageEditContainer from 'modules/sales-offer/offer/containers/sections/OfferMessageEditContainer';
import { useOfferContext } from 'modules/sales-offer/offer/contexts/OfferContext';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  showEdit?: boolean;
};
const SaleOfferSummaryDetail = ({ showEdit }: Props) => {
  const { offer, onOneToggle, state, onOneClose } = useOfferContext();
  const { t } = useTranslation('offerOrder');
  // status edit
  const open = useMemo(() => state?.form_message || false, [state]);
  const handleRuleToggle = useCallback(() => onOneToggle?.('form_message'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_message'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        title={t('sections.description.title')}
        actions={<FormPaperAction onToggle={handleRuleToggle} open={open} disabled={!showEdit} />}
      >
        <OfferMessageEditContainer onClose={handleClose} />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      title={t('sections.description.title')}
      actions={<FormPaperAction onToggle={handleRuleToggle} open={open} disabled={!showEdit} />}
    >
      <Stack
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={2}
        sx={{ position: 'relative', p: 2, backgroundColor: 'background.default', borderRadius: 1 }}
      >
        <Avatar
          src={OFFER_IMAGES.start}
          variant='square'
          sx={{
            width: 30,
            height: 30,
            backgroundColor: 'transparent',
            '& .MuiAvatar-img': {
              objectFit: 'contain',
              objectPosition: 'center',
            },
          }}
        >
          <LocalOfferOutlined />
        </Avatar>
        <Stack gap={1} flex={1}>
          <LongText lineClamp={2} fontWeight={600} text={offer?.description} />
          <LongText lineClamp={3} text={offer?.promotionText} />
        </Stack>
      </Stack>
    </FormPaper>
  );
};

export default SaleOfferSummaryDetail;
