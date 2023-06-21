import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { AdvertisementCardList } from 'modules/rrhh/advertisement/components/AdvertisementCardList';
import { ImportantNotification } from 'modules/dashboard/components/ImportantNotification';
import { CurrentTask } from 'modules/dashboard/components/CurrentTask';
import Temporal from 'modules/dashboard/components/Temporal/Temporal';
import CardCumple from 'modules/rrhh/Brithday/components/CardCumple/CardCumple';
import EmployerNew from 'modules/rrhh/Brithday/components/newEmployer/EmployerNew';

const DashboardPage = () => {
  return (
        <PageLayout sx={{ marginY: 3 }}>
            <DetailLayout sx={{ position: 'relative' }}>
                <DetailSummary ghost>
                    <AdvertisementCardList/>
                    <CardCumple name='Lorena Perez'/>
                    <EmployerNew />
                </DetailSummary>

                <DetailContent ghost>
                    <ImportantNotification/>
                    <CurrentTask/>
                    <CurrentTask/>
                </DetailContent>
                <Temporal/>
            </DetailLayout>
        </PageLayout>
  );
};

export default memo(DashboardPage);
