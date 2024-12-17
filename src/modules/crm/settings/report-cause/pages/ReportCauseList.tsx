import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ReportCauseListContainer from 'modules/crm/settings/report-cause/containers/ReportCauseListContainer';
import { reportCauseFilters } from 'modules/crm/settings/report-cause/constants/report-cause.filters';

const ReportCauseList = () => {
  const { t } = useTranslation('reportCause');

  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'report-causes'} filters={reportCauseFilters}>
        <ReportCauseListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ReportCauseList);
