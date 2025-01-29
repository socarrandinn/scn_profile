import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { collectionElementsFilters } from '../constants';
import CollectionElementListContainer from '../containers/CollectionElementListContainer';

type Props = { contentType: COLLECTION_CONTENT_TYPE };

const title = {
  [COLLECTION_CONTENT_TYPE.BANNER]: 'banner:list',
  [COLLECTION_CONTENT_TYPE.PRODUCT]: 'product:list',
  [COLLECTION_CONTENT_TYPE.CATEGORY]: 'category:list',
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: 'testimony:list',
};

const CollectionElementListPage = ({ contentType }: Props) => {
  const { t } = useTranslation('collection');
  return (
    <PagePaperLayout title={t(title[contentType])} mb={3}>
      <TableProvider id={`collection-element-${contentType}`} filters={collectionElementsFilters}>
        <CollectionElementListContainer contentType={contentType} />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CollectionElementListPage);
