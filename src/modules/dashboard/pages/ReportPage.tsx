import { ConditionContainer, FlexBox } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { memo, useTransition } from 'react';
import DashboardNoPermissionContainer from '../Component/DashboardNoPermissionContainer';
import { useTranslation } from 'react-i18next';
import { CountBox } from 'components/libs/analytic/CountBox';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const ReportPage = () => {
  const { hasPermission } = useSecurity();
  const { t } = useTranslation('dashboard');
  return (
    <PageLayout>
      <ConditionContainer
        active={hasPermission('REPORT_VIEW_INVENTORY')}
        alternative={<DashboardNoPermissionContainer />}
      >
        <PagePaperLayout title={t('report.inventory.title')}>
          <FlexBox gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap={'wrap'}>
            <CounterBox
              title={t('Box0')}
              value={25}
              flexGrow={1}
              currency
              icon={FilterCenterFocusOutlinedIcon}
              color={'secondary'}
            />

            <CounterBox
              title={t('Box0')}
              value={25}
              flexGrow={1}
              currency
              icon={FilterCenterFocusOutlinedIcon}
              color={'secondary'}
            />
            <CounterBox
              title={t('Box0')}
              value={25}
              flexGrow={1}
              currency
              icon={FilterCenterFocusOutlinedIcon}
              color={'secondary'}
            />
            <CounterBox
              title={t('Box0')}
              value={25}
              flexGrow={1}
              currency
              icon={FilterCenterFocusOutlinedIcon}
              color={'secondary'}
            />
            <CounterBox
              title={t('Box0')}
              value={25}
              flexGrow={1}
              currency
              icon={FilterCenterFocusOutlinedIcon}
              color={'secondary'}
            />
            <CounterBox
              title={'Box1'}
              value={25}
              flexGrow={1}
              currency
              icon={LocalMallOutlinedIcon}
              color={'primary'}
            />

            <CounterBox
              title={'Box3'}
              value={100}
              flexGrow={1}
              currency
              icon={LocalShippingOutlinedIcon}
              color={'primary'}
            />

            <CounterBox title={'Box4'} value={156} flexGrow={1} currency color={'primary'} variant={'contented'} />
          </FlexBox>
        </PagePaperLayout>
      </ConditionContainer>
    </PageLayout>
  );
};

export default memo(ReportPage);
