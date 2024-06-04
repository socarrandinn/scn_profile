import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Stack, Typography } from '@mui/material';
import { ConditionContainer, DialogForm, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useFindReportCauses } from '../hooks/useFindReportCauses';
import useReportCauseForm from '../hooks/useReportCauseForm';
import ReportCauseRadioGroupFormSkeleton from '../components/ReportCauseRadioGroupForm/ReportCauseRadioGroupFormSkeleton';
import ReportCauseRadioGroupForm from '../components/ReportCauseRadioGroupForm/ReportCauseRadioGroupForm';

type ReviewsReportCausesModalProps = {
  open: boolean;
  onClose: () => void;
  isLoading: boolean;
  error: any;
  onReject: (cause: string) => void;
};
const ReviewsReportCausesModal = ({ open, onClose, error, isLoading, onReject }: ReviewsReportCausesModalProps) => {
  const { t } = useTranslation(['reportCause', 'reviews']);
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const { data: causes, isLoading: isCauseLoading } = useFindReportCauses(open);
  const { control, onSubmit, cause } = useReportCauseForm(onReject);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={isLoading}
      title={
        <Stack>
          <Typography fontWeight={600}>{t('modal.title')}</Typography>
          <Typography>{t('modal.subtitle')}</Typography>
        </Stack>
      }
      aria-labelledby={'reviews-creation-title'}
    >
      <DialogContent>
        <ConditionContainer active={!isCauseLoading || !isLoading} alternative={<ReportCauseRadioGroupFormSkeleton />}>
          <ReportCauseRadioGroupForm
            control={control}
            error={error}
            isLoading={isLoading}
            onSubmit={onSubmit}
            causes={causes?.data}
          />
        </ConditionContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton disabled={!cause} loading={isLoading} type='submit' form='report-cause-form' variant='contained' color='error'>
          {t('reviews:reject')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ReviewsReportCausesModal);
