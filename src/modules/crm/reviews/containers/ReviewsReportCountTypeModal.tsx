import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { DialogForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IReviews } from 'modules/crm/reviews/interfaces';
import { ReviewReportChart } from '../components/ReviewReportChart';
import { ButtonLink } from '@dfl/react-security';

type ReviewsReportCountTypeModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  reviewId: string;
  dataError?: any;
  initValue?: IReviews;
  onClose: () => void;
};
const ReviewsReportCountTypeModal = ({
  open,
  onClose,
  loadingInitData,
  initValue,
  reviewId,
}: ReviewsReportCountTypeModalProps) => {
  const { t } = useTranslation('reviews');
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t('chart.title')}
      aria-labelledby={'reviews-creation-title'}
      maxWidth={'md'}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
        }}
      >
        <ButtonLink
          variant='outlined'
          to={`/crm/reviews/${reviewId}`}
          size='small'
          sx={{ marginLeft: 'auto' }}
          onClick={handleClose}
        >
          {t('common:showMore')}
        </ButtonLink>
        <ReviewReportChart data={initValue} isLoading={loadingInitData} />
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ReviewsReportCountTypeModal);
