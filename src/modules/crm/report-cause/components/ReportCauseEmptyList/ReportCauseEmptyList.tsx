import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { Stack, Typography } from '@mui/material';
import { ButtonLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';

const ReportCauseEmptyList = () => {
  const { t } = useTranslation('reportCause');
  return (
    <PagePaperLayout>
      <Stack gap={1} alignItems={'center'}>
        <Typography variant='h1' color='initial'>
          {t('listEmpty.title')}
        </Typography>
        <Typography> {t('listEmpty.subtitle')}</Typography>
        <ButtonLink variant='outlined' to={'/crm/report-causes'}>
          {t('create')}
        </ButtonLink>
      </Stack>
    </PagePaperLayout>
  );
};

export default memo(ReportCauseEmptyList);
