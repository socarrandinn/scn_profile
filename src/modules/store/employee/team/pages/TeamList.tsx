import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
// import TeamListContainer from 'module/store/employee/team/containers/TeamListContainer';
import { teamFilters } from 'modules/store/employee/team/constants/team.filters';

const TeamList = () => {
  const { t } = useTranslation('team');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'teams'} filters={teamFilters}>
        {/*<TeamListContainer />*/}
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(TeamList);
