import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import TeamDetailsContainer from 'modules/rrhh/team/containers/TeamDetailsContainer';

const TeamDetails = () => {
  const { t } = useTranslation('team');

  return (
    <PagePaperLayout title={t('details')}>
      <TeamDetailsContainer />
    </PagePaperLayout>
  );
};

export default memo(TeamDetails);
