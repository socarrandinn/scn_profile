import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { USER_DETAILS_SUMMARY } from 'modules/security/users/constants';
import { DetailStack, HandlerError } from '@dfl/mui-react-common';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';
import AvatarUser from 'modules/security/users/components/AvatarUser/AvatarUser';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useCategoryDetail } from 'modules/store/settings/category/context/CategoryDetailContext';
import CategoryUpdateImage from 'modules/store/settings/category/components/CategoryUpdateImage/CategoryUpdateImage';

const CategoryDetail = () => {
  const { user } = useUserDetail();
  const { category, isLoading, error } = useCategoryDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton />;
  }
  if (error) {
    return <HandlerError error={error} />;
  }

  return (
    <Stack p={2} pt={5} spacing={2}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <CategoryUpdateImage />
        <Typography variant={'h3'} mt={1}>
          {category?.name}
        </Typography>
          <Typography variant={'body1'} mt={1}>
          {category?.description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default memo(CategoryDetail);
