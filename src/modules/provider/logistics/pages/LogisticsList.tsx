import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import LogisticsListContainer from 'modules/provider/logistics/containers/LogisticsListContainer';
import { logisticsFilters } from 'modules/provider/logistics/constants/logistics.filters';

const LogisticsList = () => {
  const { t } = useTranslation('logistics');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'logistics'} filters={logisticsFilters}>
        <LogisticsListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticsList);
