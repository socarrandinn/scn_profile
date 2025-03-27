import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListAltOutlined } from '@mui/icons-material';

type Props = {
  isLoading?: boolean;
  totalOrders: number;
};
const SubOrderStatusSummary = ({ totalOrders, isLoading }: Props) => {
  const { t } = useTranslation('subOrder');
  return (
    <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' mb={2}>
      <CounterBox
        title={t('changeStatus.totalOrders')}
        value={totalOrders}
        flexGrow={1}
        currency={false}
        icon={ListAltOutlined}
        isLoading={isLoading}
        variant='contented'
        color='primary'
      />
    </Stack>
  );
};

export default memo(SubOrderStatusSummary);
