import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListAltOutlined } from '@mui/icons-material';
import { IDispatchVerify } from '../../interfaces';
import CounterBoxSkeleton from 'components/libs/analytic/CounterBox/CounterBoxSkeleton';
import { renderDispatchRegion } from '../DispatchRegion/DispatchRegion';

type Props = {
  data: IDispatchVerify;
  isLoading?: boolean;
};
const DispatchVerifySummary = ({ data, isLoading }: Props) => {
  const { t } = useTranslation('dispatch');

  if (isLoading) {
    return (
      <Stack gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }} mb={2}>
        <CounterBoxSkeleton />
        <CounterBoxSkeleton />
        <CounterBoxSkeleton />
      </Stack>
    );
  }

  return (
    <Stack gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' mb={2}>
      <CounterBox
        title={t('fields.verify.orderInDispatch')}
        value={data?.orderInDispatch}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        color='error'
        hidden={!data?.orderInDispatch}
      />
      <CounterBox
        title={t('fields.verify.orderCompleted')}
        value={data?.orderCompleted}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        color='error'
        hidden={!data?.orderCompleted}
      />

      <CounterBox
        title={t('fields.verify.totalOrders')}
        value={data?.totalOrders}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        color='primary'
        hidden={!data?.totalOrders}
      />

      {data?.subordersByRegion?.map((reg) => (
        <CounterBox
          key={reg?.region}
          title={t('fields.verify.totalOrders')}
          value={reg?.totalOrders}
          flexGrow={1}
          currency={false}
          icon={ListAltOutlined}
          isLoading={isLoading}
          variant='contented'
          color='primary'
        >
          {renderDispatchRegion({ value: reg?.region })}
        </CounterBox>
      ))}
    </Stack>
  );
};

export default memo(DispatchVerifySummary);
