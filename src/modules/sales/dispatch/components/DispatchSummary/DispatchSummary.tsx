import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListAltOutlined } from '@mui/icons-material';
import { IDispatchMetrics } from '../../interfaces';

type Props = {
  metrics: IDispatchMetrics;
  isLoading?: boolean;
};
const DispatchSummary = ({ metrics, isLoading }: Props) => {
  const { t } = useTranslation('dispatch');
  return (
    <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' mb={2}>
      <CounterBox
        title={t('fields.verify.totalOrders')}
        value={metrics?.suborderCount}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
      />

      {metrics?.subordersByRegion?.map((reg) => (
        <CounterBox
          key={reg?.state}
          title={t('fields.verify.totalOrders')}
          value={reg?.totalSuborders}
          flexGrow={1}
          currency={false}
          icon={ListAltOutlined}
          isLoading={isLoading}
          variant='contented'
        >
          {reg?.state}
        </CounterBox>
      ))}
    </Stack>
  );
};

export default memo(DispatchSummary);
