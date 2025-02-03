import { memo } from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import { HandlerError, ButtonOutlined, FlexBox } from '@dfl/mui-react-common';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import { ImageCategory } from 'modules/inventory/settings/category/components/CategoryUpdateImage';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants/category.permissions';
import { PermissionCheck, useSearchParamsChange } from '@dfl/react-security';
import CategoryEditModal from 'modules/inventory/settings/category/containers/CategoryEditModal';
import { useTranslation } from 'react-i18next';

const CategoryDetail = () => {
  const { category, isLoading, error } = useCategoryDetail();
  const { update } = useSearchParamsChange('edit');
  const { t } = useTranslation('category');

  if (isLoading) {
    return <SummaryWithAvatarSkeleton/>;
  }
  if (error) {
    return <HandlerError error={error}/>
  }
  const handleEdit = () => {
    update({ edit: category?._id });
  }

  return (
        <Stack p={2} pt={5} spacing={2}>
            <Stack direction='column' alignItems='center' spacing={0}>
                <ImageCategory category={category?._id as string}/>
                 <Typography variant={'h3'} mt={1}>
                    {category?.name}
                </Typography>
                <Typography variant={'body1'} mt={1}>
                    {category?.description}
                </Typography>
            </Stack>
            <Divider/>
            <PermissionCheck permissions={CATEGORY_PERMISSIONS.CATEGORY_WRITE}>
                <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
                    <ButtonOutlined fullWidth={true} color={'success'} onClick={handleEdit}>
                        {t('edit')}
                    </ButtonOutlined>
                </FlexBox>
                <CategoryEditModal/>
            </PermissionCheck>
        </Stack>
  );
};
export default memo(CategoryDetail);
