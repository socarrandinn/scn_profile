import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import TabListContainer from 'modules/inventory/settings/tab/containers/TabListContainer';
import { tabFilters } from 'modules/inventory/settings/tab/constants/tab.filters';

const TabList = () => {
  const { t } = useTranslation('tab');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'tabs'} filters={tabFilters}>
        <TabListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(TabList);
