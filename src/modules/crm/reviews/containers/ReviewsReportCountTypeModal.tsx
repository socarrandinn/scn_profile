import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { DialogForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IReviews } from 'modules/crm/reviews/interfaces';
import { ReviewReportChart } from '../components/ReviewReportChart';

type ReviewsReportCountTypeModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IReviews;
  onClose: () => void;
};
const ReviewsReportCountTypeModal = ({
  title = 'create',
  open,
  onClose,
  loadingInitData,
  initValue,
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
      <DialogContent>
        <ReviewReportChart data={initValue} isLoading={loadingInitData} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ReviewsReportCountTypeModal);
