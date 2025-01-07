import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import CollectionsListContainer from 'modules/cms/collections/containers/CollectionsListContainer';
import { collectionsFilters } from 'modules/cms/collections/constants/collections.filters';

const CollectionsList = () => {
  const { t } = useTranslation('collections');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'collections'} filters={collectionsFilters}>
        <CollectionsListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CollectionsList);
