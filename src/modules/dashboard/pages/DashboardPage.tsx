import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { AdvertisementCardList } from 'modules/rrhh/advertisement/components/AdvertisementCardList';
import { CurrentTask } from 'modules/dashboard/components/CurrentTask';
import CardBirthday from 'modules/rrhh/Brithday/components/CardCumple/CardBirthday';
import EmployerNew from 'modules/rrhh/Brithday/components/newEmployer/EmployerNew';
import { FlexBox } from '@dfl/mui-react-common';
import ImportantNotificationContainer
  from 'modules/dashboard/components/ImportantNotification/ImportantNotificationContainer';

const DashboardPage = () => {
  return (
        <PageLayout sx={{ marginY: 3 }}>
            <DetailLayout sx={{ position: 'relative' }}>
                <DetailSummary ghost>
                    <FlexBox flexDirection={'column'} gap={2}>
                        <AdvertisementCardList/>
                        <CardBirthday/>
                        <EmployerNew/>
                    </FlexBox>
                </DetailSummary>
                <DetailContent ghost>
                    <ImportantNotificationContainer/>
                    <CurrentTask/>
                    <CurrentTask/>
                </DetailContent>
                {/* <Temporal/> */}
            </DetailLayout>
        </PageLayout>
  );
};

export default memo(DashboardPage);
