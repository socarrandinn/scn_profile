import { memo } from 'react';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useIncidenceDetail } from '../../context/IncidenceDetailContext';
import { incidenceTabs } from '../../constants/incidence-tabs';
import IncidenceActionsHeader from '../IncidenceActionsHeader/IncidenceActionsHeader';
import { Section } from 'modules/common/components/HeaderSummaryTabs/styled';
import { IncidenceStatusPicker } from '../IncidenceStatusPicker';
import { INCIDENCE_STATUS_ENUM } from '../../constants/incidence-status';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import { IncidenceHeaderActions } from '../IncidenceHeaderActions';

const IncidenceHeaderDetails = () => {
  const { incidence, isLoading, error, incidenceId } = useIncidenceDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <>
      <Section sx={{ padding: '24px 24px 0px 30px', gap: 0.5, minHeight: 'auto' }}>
        <FlexBox justifyContent={'space-between'} mb={1} alignItems={'flex-start'}>
          <IncidenceActionsHeader
            code={incidence?.code}
            orderId={incidence?.orderReference?._id}
            title={incidence?.code as string}
            actions={<IncidenceHeaderActions />}
            orderCode={incidence?.orderReference?.code}
            incidenceTitle={incidence?.cause?.name}
            referenceType={incidence?.referenceType}
          >
            <FlexBox alignItems={'center'} gap={4} mb={1}>
              <DateValue value={incidence?.createdAt} format='MM/dd/yyyy hh:mm a' />
              <IncidenceStatusPicker
                value={incidence?.status as INCIDENCE_STATUS_ENUM}
                rowId={incidenceId}
                readOnly
              />
            </FlexBox>
          </IncidenceActionsHeader>
        </FlexBox>

        <RouterTab
          tabs={incidenceTabs}
          prefix={`/sales/incidences/${incidenceId}`}
          translationNs={'provider'}
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
        />
      </Section >
    </>
  );
};

export default memo(IncidenceHeaderDetails);
