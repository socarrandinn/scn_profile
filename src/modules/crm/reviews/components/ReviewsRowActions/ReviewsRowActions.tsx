import { memo, useCallback, useMemo } from 'react';
import { Chip, CircularProgress, Stack } from '@mui/material';
import { AddCircleOutline, CancelOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import useUpdateReviewsStatus from '../../hooks/useUpdateReviewsStatus';
import { ADMIN_REVIEW_STATUS_ENUM, IReviews } from '../../interfaces';
import { ConfirmAction } from 'components/ConfirmAction';
import { useToggle } from '@dfl/hook-utils';

type UserStatusProps = {
  rowId: string;
  record: IReviews;
};

const ReviewsRowActions = ({ rowId, record }: UserStatusProps) => {
  const { t } = useTranslation('reviews');
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading } = useUpdateReviewsStatus(rowId);
  const isPending = useMemo(
    () => [ADMIN_REVIEW_STATUS_ENUM.ACCEPTED, ADMIN_REVIEW_STATUS_ENUM.REJECTED].includes(record?.status),
    [record],
  );

  const onAccept = useCallback(() => {
    mutate(ADMIN_REVIEW_STATUS_ENUM.ACCEPTED);
  }, []);

  const onReject = useCallback(() => {
    mutate(ADMIN_REVIEW_STATUS_ENUM.REJECTED);
  }, []);

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
          onClick={onReject}
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
      </Stack>
    </>
  );
};

export default memo(ReviewsRowActions);
