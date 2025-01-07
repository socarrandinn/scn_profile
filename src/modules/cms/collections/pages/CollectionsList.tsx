import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import CollectionsListContainer from 'modules/cms/collections/containers/CollectionsListContainer';
import { collectionsFilters } from 'modules/cms/collections/constants/collections.filters';
import { collectionViewTabs } from '../constants/collection.viewtabs';

const CollectionsList = () => {
  const { t } = useTranslation('collection');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'collections'} filters={collectionsFilters}>
        <FilterViewProvider views={collectionViewTabs}>
          <CollectionsListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CollectionsList);
