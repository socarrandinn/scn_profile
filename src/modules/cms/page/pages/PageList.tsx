import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import PageListContainer from 'modules/cms/page/containers/PageListContainer';
import { pageFilters } from 'modules/cms/page/constants/page.filters';

const PageList = () => {
  const { t } = useTranslation('page');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'pages'} filters={pageFilters}>
        <PageListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(PageList);
