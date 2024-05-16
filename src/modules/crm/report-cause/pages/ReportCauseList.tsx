import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ReportCauseListContainer from 'modules/crm/report-cause/containers/ReportCauseListContainer';
import { reportCauseFilters } from 'modules/crm/report-cause/constants/report-cause.filters';

const ReportCauseList = () => {
  const { t } = useTranslation('reportCause');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'reportCauses'} filters={reportCauseFilters}>
        <ReportCauseListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ReportCauseList);
