import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { collectionElementsFilters } from '../constants';
import CollectionElementListContainer from '../containers/CollectionElementListContainer';
import { PagePaperLayout } from 'layouts/index';
import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';
import { useCollectionDetails } from '../context/CollectionContext';

type Props = { contentType: COLLECTION_CONTENT_TYPE };

const CollectionElementListPage = ({ contentType }: Props) => {
  const { t } = useTranslation('collection');
  const { isLoading } = useCollectionDetails();
  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader size={'screen'} />}>
      <PagePaperLayout
        title={t(`collection:lists.${contentType}.title`)}
        subtitle={t(`collection:lists.${contentType}.subtitle`)}
        mb={3}
      >
        <TableProvider id={`collection-element-${contentType}`} filters={collectionElementsFilters}>
          <CollectionElementListContainer contentType={contentType} />
        </TableProvider>
      </PagePaperLayout>
    </ConditionContainer>
  );
};

export default memo(CollectionElementListPage);
