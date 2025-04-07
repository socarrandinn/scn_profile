import { memo } from 'react';
import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { useTranslation } from 'react-i18next';
import { ListAltOutlined } from '@mui/icons-material';
import { IDispatchVerify } from '../../interfaces';
import CounterBoxSkeleton from 'components/libs/analytic/CounterBox/CounterBoxSkeleton';

type Props = {
  data: IDispatchVerify;
  isLoading?: boolean;
};
const DispatchVerifySummary = ({ data, isLoading }: Props) => {
  const { t } = useTranslation('dispatch');

  if (isLoading) {
    return (
      <Stack gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }} mb={4}>
        <CounterBoxSkeleton />
        <CounterBoxSkeleton />
        <CounterBoxSkeleton />
      </Stack>
    );
  }

  return (
    <Stack gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' mb={4}>
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
        title={t('fields.verify.orderInDifferentDistributionCenter')}
        value={data?.orderInDifferentDistributionCenter}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        color='error'
        hidden={!data?.orderInDifferentDistributionCenter}
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
    </Stack>
  );
};

export default memo(DispatchVerifySummary);
