import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import DisallowedWordListContainer from 'modules/crm/settings/disallowed-word/containers/DisallowedWordListContainer';
import { disallowedWordFilters } from 'modules/crm/settings/disallowed-word/constants/disallowed-word.filters';

const DisallowedWordList = () => {
  const { t } = useTranslation('disallowedWord');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'disallowedWords'} filters={disallowedWordFilters}>
        <DisallowedWordListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(DisallowedWordList);
