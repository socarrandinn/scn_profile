import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { CounterBox } from 'components/libs/analytic/CounterBox';

const SupplierReportSaleSummary = () => {
  const { t } = useTranslation('providerAnalytic');

  return (
    <FlexBox gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap={'wrap'}>
      <CounterBox
        title={t('card.totalSell')}
        value={500}
        currency
        flexGrow={1}
        icon={ListAltOutlinedIcon}
        loading={false}
      />
      <CounterBox
        title={t('card.totalCost')}
        value={400}
        currency
        flexGrow={1}
        icon={ListAltOutlinedIcon}
        loading={false}
        color={'warning'}
        variant={'contented'}
      />
      <CounterBox
        title={t('card.totalAmount')}
        value={700}
        flexGrow={1}
        currency
        icon={PaymentsOutlinedIcon}
        color={'primary'}
        variant={'contented'}
        loading={false}
      />
    </FlexBox>
  );
};

export default memo(SupplierReportSaleSummary);
