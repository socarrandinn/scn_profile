import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { AdvertisementCardList } from 'modules/rrhh/advertisement/components/AdvertisementCardList';
import { ImportantNotification } from 'modules/dashboard/components/ImportantNotification';
import { CurrentTask } from 'modules/dashboard/components/CurrentTask';
import CardBrithday from 'modules/rrhh/Brithday/components/CardCumple/CardBrithday';
import EmployerNew from 'modules/rrhh/Brithday/components/newEmployer/EmployerNew';

const DashboardPage = () => {
  return (
    <PageLayout sx={{ marginY: 3 }}>
      <DetailLayout sx={{ position: 'relative' }}>
        <DetailSummary ghost>
           <AdvertisementCardList />
          <CardBrithday />
           <EmployerNew />
          </DetailSummary>
        <DetailContent ghost>
          <ImportantNotification
            name='Lorena Perez'
            url='/images/noti.svg'
            title='Felicidades! Recibiras un aumento..'
            bodyMenssager='
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi possimus magni nihil tenetur nobis blanditiis quae! Saepe, atque adipisci?.'
          />
          <CurrentTask />
          <CurrentTask />
        </DetailContent>
        {/* <Temporal/> */}
      </DetailLayout>
    </PageLayout>
  );
};

export default memo(DashboardPage);
