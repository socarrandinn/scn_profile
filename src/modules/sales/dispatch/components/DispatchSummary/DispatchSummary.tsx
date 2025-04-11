import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListAltOutlined } from '@mui/icons-material';
import { IDispatchMetrics } from '../../interfaces';
import { renderStateValue } from '../DispatchRegion/DispatchRegion';
import { WeightIcon } from 'modules/sales/common/components/OrderShipping/icons/WeightIcon';
import { VolumeIcon } from 'modules/sales/common/components/OrderShipping/icons/VolumeIcon';

type Props = {
  metrics: IDispatchMetrics;
  isLoading?: boolean;
};
const DispatchSummary = ({ metrics, isLoading }: Props) => {
  const { t } = useTranslation('dispatch');
  return (
    <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' mb={4}>
      <CounterBox
        title={t('fields.verify.totalOrders')}
        value={metrics?.suborderCount}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        color='primary'
        hidden={!metrics?.suborderCount}
      />

      <CounterBox
        title={t('fields.verify.totalOrders')}
        renderValue={renderStateValue}
        value={metrics?.subordersByRegion}
        small
        flexGrow={1}
        variant={'contented'}
        color={'primary'}
        icon={ListAltOutlined}
        loading={isLoading}
        currency={false}
      />

      <CounterBox
        title={t('fields.verify.totalProducts')}
        value={metrics?.totalProducts}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='outlined'
        hidden={!metrics?.totalProducts}
      />
      <CounterBox
        title={t('fields.verify.totalVolume')}
        value={metrics?.totalVolume}
        flexGrow={1}
        currency={false}
        // @ts-ignore
        icon={VolumeIcon}
        isLoading={isLoading}
        hidden={!metrics?.totalVolume}
      />
      <CounterBox
        title={t('fields.verify.totalWeight')}
        value={metrics?.totalWeight}
        flexGrow={1}
        currency={false}
        // @ts-ignore
        icon={WeightIcon}
        isLoading={isLoading}
        variant='outlined'
        hidden={!metrics?.totalWeight}
      />
    </Stack>
  );
};

export default memo(DispatchSummary);
