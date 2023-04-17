import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import JobPositionListContainer from 'modules/rrhh/settings/job-position/containers/JobPositionListContainer';
import { jobPositionFilters } from 'modules/rrhh/settings/job-position/constants/job-position.filters';

const JobPositionList = () => {
  const { t } = useTranslation('jobPosition');

  return (
    <PagePaperLayout title={t('jobPositionList')}>
      <TableProvider id={'jobPositions'} filters={jobPositionFilters}>
        <JobPositionListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(JobPositionList);
