import { Stack, Typography, Divider, Paper } from '@mui/material';
import { memo } from 'react';
import { useCategoryDetail } from 'modules/store/settings/category/context/CategoryDetailContext';
import StackDetailSkeleton from 'components/CommonLoadings/StackDetailSkeleton';
import { HandlerError } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

const CategoryDetailsContent = () => {
  const { category, isLoading, error } = useCategoryDetail();
  const { t } = useTranslation('category');

  if (isLoading) return <StackDetailSkeleton />;
  if (error) return <HandlerError error={error} />;

  return (
    <Paper>
      <Stack p={2} direction='column' spacing={2}>
        <Typography variant={'h3'} mt={1}>
          {t('fields.description')}
        </Typography>
        <Divider />
        <Typography variant={'body1'} mt={1}>
          {category?.description}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default memo(CategoryDetailsContent);
