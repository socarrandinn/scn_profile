import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import CauseCancellationListContainer from 'modules/sales/settings/cause-cancellation/containers/CauseCancellationListContainer';
import { causeCancellationFilters } from 'modules/sales/settings/cause-cancellation/constants/cause-cancellation.filters';
import { Paper, Stack, Typography } from '@mui/material';
import { sx } from 'layouts/PageLayouts/PagePaperLayout';
import CauseCancellationSettingsContainer from '../containers/CauseCancellationSettingsContainer';

const CauseCancellationList = () => {
  const { t } = useTranslation('causeCancellation');

  return (
    <>
      <PageLayout>
        <Paper sx={sx}>
          <Stack gap={2}>
            <Typography variant={'h1'}>{t('causeCancellationSettings')}</Typography>
            <CauseCancellationSettingsContainer />
          </Stack>
        </Paper>
      </PageLayout>

      <PagePaperLayout id='causeCancellations' title={t('list')}>
        <TableProvider id={'causeCancellations'} filters={causeCancellationFilters}>
          <CauseCancellationListContainer />
        </TableProvider>
      </PagePaperLayout>
    </>
  );
};

export default memo(CauseCancellationList);
