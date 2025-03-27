import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/common/components/HeaderSummaryTabs';
import { Stack } from '@mui/material';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { usePaymentAgreementDetail } from '../../contexts/paymentAgreementContext';
import { PaymentAgreementStatus } from '../PaymentAgreementStatus';
import { PAYMENT_AGREEMENT_STATUS_ENUM } from '../../constants/payment-agreement.enum';
import { DateValue } from '@dfl/mui-react-common';
import { PermissionCheck } from '@dfl/react-security';
import { PAYMENT_AGREEMENT_PERMISSIONS } from '../../constants';
import { PaymentAgreementDetailActions } from '../PaymentAgreementDetailActions';
import { DetailItem } from 'components/DetailItem/DetailItem';
import { OrderIcon } from 'modules/sales/common/components/icons';
import SendDateIcon from '../icons/SendDateIcon';
import { TransTypography } from 'components/TransTypography';
import { HandshakeOutlined } from '@mui/icons-material';

const PaymentAgreementHeaderDetails = () => {
  const { paymentAgreement, isLoading, error } = usePaymentAgreementDetail();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      icon={<HandshakeOutlined />}
      title={paymentAgreement?.name || ''}
      subtitle={<Subtitle />}
      actions={<Actions />}
      sx={{ minHeight: 175 }}
    />
  );
};

export default memo(PaymentAgreementHeaderDetails);

export const Actions = () => {
  const { paymentAgreement, isLoading } = usePaymentAgreementDetail();
  const components = {
    send: <DateValue value={paymentAgreement?.sendDate} format='MM/dd/yyyy | hh:mm a' />,
  };
  return (
    <Stack flexDirection={'row'} justifyContent={'start'} alignItems={'center'} gap={2} flexWrap={'wrap'}>
      <DetailItem icon={<OrderIcon color='primary' />} isLoading={isLoading}>
        <TransTypography
          lineHeight={2}
          message={'paymentAgreement:items:quantityOrders'}
          values={{ count: paymentAgreement?.quantityOrders }}
        />
      </DetailItem>
      <DetailItem icon={<SendDateIcon color='primary' />} isLoading={isLoading}>
        <TransTypography lineHeight={2} message={'paymentAgreement:items:sendDate'} components={components} />
      </DetailItem>
    </Stack>
  );
};
export const Subtitle = () => {
  const { paymentAgreement } = usePaymentAgreementDetail();
  return (
    <Stack flexDirection={'row'} alignItems={'center'} gap={1} flexWrap={'wrap'} mt={1}>
      <PaymentAgreementStatus value={paymentAgreement?.status || PAYMENT_AGREEMENT_STATUS_ENUM?.PENDING} />
      <PermissionCheck permissions={PAYMENT_AGREEMENT_PERMISSIONS.PAYMENT_AGREEMENT_WRITE}>
        <PaymentAgreementDetailActions />
      </PermissionCheck>
    </Stack>
  );
};
