import { memo } from 'react';
import { Avatar, Skeleton, Stack, Typography } from '@mui/material';
import { USER_DETAILS_SUMMARY } from 'modules/security/users/constants';
import { DetailStack, imageUrl } from '@dfl/mui-react-common';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';
import { useReviewsReportDetailContext } from '../../contexts/ReviewsReportDetail';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { AccountCircle } from '@mui/icons-material';

const ReviewUserDetail = () => {
  const { review } = useReviewsReportDetailContext();
  const { t } = useTranslation('reviews');
  const { data: user, isLoading, error } = useFindOneUsers(review?.user?._id as string);
  const image: string = imageUrl(user?.avatar?.thumb || '');

  if (isLoading || error) {
    return (
      <FormPaper
        // @ts-ignore
        title={<Skeleton width={120} variant='text' />}
      >
        <SummaryWithAvatarSkeleton />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.user.details')}>
      <Stack gap={2}>
        <Stack direction='column' alignItems='center' spacing={0}>
          <Avatar sx={{ width: 100, height: 100 }} src={image}>
            <AccountCircle />
          </Avatar>
          <Typography variant={'h3'} mt={1}>
            {user?.fullName}
          </Typography>
          <Typography color={'text.secondary'}>{user?.email}</Typography>
        </Stack>
        <DetailStack details={USER_DETAILS_SUMMARY} data={user} />
      </Stack>
    </FormPaper>
  );
};

export default memo(ReviewUserDetail);
