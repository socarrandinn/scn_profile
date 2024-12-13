import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import TagsListContainer from 'modules/inventory/settings/tags/containers/TagsListContainer';
import { tagsFilters } from 'modules/inventory/settings/tags/constants/tags.filters';

const TagsList = () => {
  const { t } = useTranslation('tags');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'tags'} filters={tagsFilters}>
        <TagsListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(TagsList);
