import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListAltOutlined } from '@mui/icons-material';
import { IDispatchVerify } from '../../interfaces';
import { APEX_CHARTS_OPTIONS } from 'components/libs/analytic/constants/bar.chart.constants';

type Props = {
  data: IDispatchVerify;
  isLoading?: boolean;
};
const DispatchVerifySummary = ({ data, isLoading }: Props) => {
  const { t } = useTranslation('dispatch');
  return (
    <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' mb={2}>
      <CounterBox
        title={t('fields.verify.totalOrders')}
        value={data?.totalOrders}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        color='error'
      />
      <CounterBox
        title={t('fields.verify.orderInDispatch')}
        value={data?.orderInDispatch}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        color='error'
      />
      <CounterBox
        title={t('fields.verify.orderCompleted')}
        value={data?.orderCompleted}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        sx={{
          backgroundColor: (APEX_CHARTS_OPTIONS.colors as string[])?.[0],
          color: 'common.white',
        }}
      />
    </Stack>
  );
};

export default memo(DispatchVerifySummary);
