import { memo } from 'react';
import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { useTranslation } from 'react-i18next';
import { ListAltOutlined } from '@mui/icons-material';
import { IDispatchVerify } from '../../interfaces';
import CounterBoxSkeleton from 'components/libs/analytic/CounterBox/CounterBoxSkeleton';
import { renderStateValue } from '../DispatchRegion/DispatchRegion';
import DispatchDistributionCenterSummary from './DispatchDistributionCenterSummary';

type Props = {
  data: IDispatchVerify;
  isLoading?: boolean;
  isValid?: boolean;
};
const DispatchVerifySummary = ({ data, isLoading, isValid }: Props) => {
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
    <Stack mb={4} gap={2}>
      <Stack gap={{ xs: 1, md: 2 }} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap'>
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
          title={t('fields.verify.orderInPaymentAgreement')}
          value={data?.orderInPaymentAgreement}
          flexGrow={1}
          currency={false}
          icon={ListAltOutlined}
          isLoading={isLoading}
          variant='contented'
          color='error'
          hidden={!data?.orderInPaymentAgreement}
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

        <CounterBox
          title={t('fields.verify.totalOrders')}
          renderValue={renderStateValue}
          value={Object.entries(data?.ordersByState ?? {})?.map((s) => ({
            state: s[0],
            totalSuborders: s[1],
          }))}
          small
          flexGrow={1}
          variant={'contented'}
          color={'primary'}
          icon={ListAltOutlined}
          loading={isLoading}
        />
      </Stack>

      {/* info dc */}
      {!isValid && <DispatchDistributionCenterSummary distributionCenter={data?.distributionCenter} />}
    </Stack>
  );
};

export default memo(DispatchVerifySummary);
