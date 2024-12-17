import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import LogisticsListContainer from 'modules/inventory/provider/logistics/containers/LogisticsListContainer';
import { logisticFilters } from 'modules/inventory/provider/logistics/constants';

const LogisticsList = () => {
  const { t } = useTranslation('logistics');

  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'logistics'} filters={logisticFilters}>
        <LogisticsListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticsList);
