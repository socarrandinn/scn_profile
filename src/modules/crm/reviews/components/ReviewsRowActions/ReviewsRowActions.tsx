import { memo, useCallback, useMemo } from 'react';
import { Chip, CircularProgress, Stack } from '@mui/material';
import { AddCircleOutline, CancelOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import useUpdateReviewsStatus from '../../hooks/useUpdateReviewsStatus';
import { ADMIN_REVIEW_STATUS_ENUM, IReviews } from '../../interfaces';
import { ConfirmAction } from 'components/ConfirmAction';
import { useToggle } from '@dfl/hook-utils';
import ReviewsReportCausesModal from 'modules/crm/settings/report-cause/containers/ReviewsReportCausesModal';

type UserStatusProps = {
  rowId: string;
  record: IReviews;
};

const ReviewsRowActions = ({ rowId, record }: UserStatusProps) => {
  const { t } = useTranslation('reviews');
  const { isOpen, onClose, onOpen } = useToggle();
  const { isOpen: isCauseOpen, onClose: onCauseClose, onOpen: onCauseOpen } = useToggle(false);

  const { mutate, isLoading, error } = useUpdateReviewsStatus(rowId, onCauseClose);
  const isPending = useMemo(
    () => [ADMIN_REVIEW_STATUS_ENUM.ACCEPTED, ADMIN_REVIEW_STATUS_ENUM.REJECTED].includes(record?.status),
    [record],
  );

  const onAccept = useCallback(() => {
    mutate({
      status: ADMIN_REVIEW_STATUS_ENUM.ACCEPTED,
      cause: undefined,
    });
  }, [mutate]);

  const onReject = useCallback(
    (cause: string) => {
      mutate({
        cause,
        status: ADMIN_REVIEW_STATUS_ENUM.REJECTED,
      });
    },
    [mutate],
  );

  return (
    <>
      <Stack direction='row' spacing={1}>
        <Chip
          color='primary'
          icon={isLoading ? <CircularProgress size={15} /> : <AddCircleOutline />}
          label={t('accept')}
          variant='outlined'
          size='small'
          onClick={onOpen}
          clickable={!isLoading}
          disabled={isPending}
        />
        <Chip
          color='error'
          icon={isLoading ? <CircularProgress size={15} /> : <CancelOutlined />}
          label={t('reject')}
          variant='outlined'
          size='small'
          onClick={onCauseOpen}
          clickable={!isLoading}
          disabled={isPending}
        />
        <ConfirmAction
          onClose={onClose}
          open={isOpen}
          onConfirm={onAccept}
          title={t('confirm.title')}
          confirmation={t('confirm.confirmation')}
        />
        <ReviewsReportCausesModal onClose={onCauseClose} open={isCauseOpen} {...{ isLoading, error, onReject }} />
      </Stack>
    </>
  );
};

export default memo(ReviewsRowActions);
