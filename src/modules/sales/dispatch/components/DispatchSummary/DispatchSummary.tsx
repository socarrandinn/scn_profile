import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListAltOutlined } from '@mui/icons-material';
import { IDispatchMetrics } from '../../interfaces';
import { APEX_CHARTS_OPTIONS } from 'components/libs/analytic/constants/bar.chart.constants';

type Props = {
  metrics: IDispatchMetrics;
};
const DispatchSummary = ({ metrics }: Props) => {
  const { t } = useTranslation('dispatch');
  return (
    <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap'>
      <CounterBox
        title={t('fields.orders')}
        value={metrics?.suborderCount}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        variant='contented'
        sx={{
          backgroundColor: (APEX_CHARTS_OPTIONS.colors as string[])?.[0],
          color: 'common.white',
        }}
      />

      {metrics?.subordersByRegion?.map((reg) => (
        <CounterBox
          key={reg?.state}
          title={t('fields.orders')}
          value={reg?.totalSuborders}
          flexGrow={1}
          currency={false}
          icon={ListAltOutlined}
          variant='contented'
          sx={{
            backgroundColor: (APEX_CHARTS_OPTIONS.colors as string[])?.[1],
            color: 'common.white',
          }}
        >
          {reg?.state}
        </CounterBox>
      ))}
    </Stack>
  );
};

export default memo(DispatchSummary);
