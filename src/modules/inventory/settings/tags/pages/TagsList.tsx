import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import TagsListContainer from 'modules/inventory/settings/tags/containers/TagsListContainer';
import { tagsFilters } from 'modules/inventory/settings/tags/constants/tags.filters';
import { HelperText } from '../../warehouse-area/components/HelperText';

const TagsList = () => {
  const { t } = useTranslation('tags');

  return (
    <PageLayout>
      <HelperText text={t('description')} />
      <PagePaperLayout title={t('list')} mb={3}>
        <TableProvider id={'tags'} filters={tagsFilters}>
          <TagsListContainer />
        </TableProvider>
      </PagePaperLayout>
    </PageLayout>
  );
};

export default memo(TagsList);
