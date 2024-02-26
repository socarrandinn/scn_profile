import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { useTranslation } from 'react-i18next';

const SummaryReportInventory = () => {
  const { t } = useTranslation();
  return (
    <FlexBox className='mt-2' gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap={'wrap'}>
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
      <CounterBox title={'Box1'} value={25} flexGrow={1} currency icon={LocalMallOutlinedIcon} color={'primary'} />

      <CounterBox title={'Box3'} value={100} flexGrow={1} currency icon={LocalShippingOutlinedIcon} color={'primary'} />

      <CounterBox title={'Box4'} value={156} flexGrow={1} currency color={'primary'} variant={'contented'} />
    </FlexBox>
  );
};

export default memo(SummaryReportInventory);
