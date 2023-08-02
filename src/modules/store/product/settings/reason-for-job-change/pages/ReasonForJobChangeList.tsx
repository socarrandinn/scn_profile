import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ReasonForJobChangeListContainer from 'modules/store/product/settings/reason-for-job-change/containers/ReasonForJobChangeListContainer';
import { reasonForJobChangeFilters } from 'modules/store/product/settings/reason-for-job-change/constants/reason-for-job-change.filters';

const ReasonForJobChangeList = () => {
  const { t } = useTranslation('reasonForJobChange');

  return (
    <PagePaperLayout title={t('reasonForJobChangeList')}>
      <TableProvider id={'reasonForJobChanges'} filters={reasonForJobChangeFilters}>
        <ReasonForJobChangeListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ReasonForJobChangeList);
