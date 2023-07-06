import { Box, Stack, Typography, Divider } from '@mui/material';
import { memo } from 'react';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import accountRoutes from 'modules/security/users/routes/account';
import { accountTabs } from 'modules/security/users/constants/account.tabs';
import { useParams } from 'react-router-dom';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useCategoryDetail } from 'modules/store/settings/category/context/CategoryDetailContext';
import StackDetailSkeleton from 'components/CommonLoadings/StackDetailSkeleton';
import { HandlerError } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Paper } from '@mui/material';

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
