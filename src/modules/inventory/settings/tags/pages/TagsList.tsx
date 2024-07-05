import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import TagsListContainer from 'modules/inventory/settings/tags/containers/TagsListContainer';
import { tagsFilters } from 'modules/inventory/settings/tags/constants/tags.filters';
import { tagsViewTabs } from '../constants/tags.viewtabs';

const TagsList = () => {
  const { t } = useTranslation('tags');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'tags'} filters={tagsFilters}>
        <FilterViewProvider views={tagsViewTabs}>
          <TagsListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(TagsList);
