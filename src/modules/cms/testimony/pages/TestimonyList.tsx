import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import TestimonyListContainer from 'modules/cms/testimony/containers/TestimonyListContainer';
import { testimonyFilters } from 'modules/cms/testimony/constants/testimony.filters';

const TestimonyList = () => {
  const { t } = useTranslation('testimony');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'testimonies'} filters={testimonyFilters}>
        <TestimonyListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(TestimonyList);
