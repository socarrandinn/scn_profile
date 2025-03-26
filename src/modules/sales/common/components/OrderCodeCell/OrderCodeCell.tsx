import { ReactLink } from '@dfl/react-security';
import { HandshakeOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { IOrder } from '../../interfaces/IOrder';
import { IconButton } from '@dfl/mui-react-common';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatchDetail } from 'modules/sales/dispatch/contexts/dispatchContext';
import { DispatchIcon } from '../icons/DispatchIcon';
import { usePaymentAgreementDetail } from 'modules/sales/payment-agreement/contexts/paymentAgreementContext';
type OrderCodeCellProps = {
  link: string;
  value: string;
  isSubOrder?: boolean;
  record: IOrder;
};

const OrderCodeCell = ({ link, value, isSubOrder, record }: OrderCodeCellProps) => {
  const navigate = useNavigate();
  const { dispatchId } = useDispatchDetail();
  const { paymentAgreementId } = usePaymentAgreementDetail();
  const { t } = useTranslation(['dispatch', 'paymentAgreement']);
  const isDispatch = useMemo(() => [record?.dispatch, isSubOrder].every(Boolean), [record?.dispatch, isSubOrder]);
  const isPaymentAgreement = useMemo(
    () => [record?.paymentAgreement, isSubOrder].every(Boolean),
    [record?.paymentAgreement, isSubOrder],
  );

  const onDispatch = useCallback(() => {
    navigate(`/sales/dispatches/${record?.dispatch as string}`);
  }, [navigate, record?.dispatch]);

  const onPaymentAgreement = useCallback(() => {
    navigate(`/sales/payment-agreements/${record?.paymentAgreement as string}`);
  }, [navigate, record?.paymentAgreement]);

  return (
    <Stack maxWidth={300} alignItems={'center'} flexDirection={'row'} gap={1}>
      <ReactLink to={link} underline={'hover'}>
        <Typography noWrap lineHeight={1} title={value}>
          {value}
        </Typography>
      </ReactLink>

      {/* suborder by dispatch */}
      {isDispatch && !dispatchId && (
        <IconButton color='primary' onClick={onDispatch} tooltip={t('dispatch:goDispatch')}>
          <DispatchIcon />
        </IconButton>
      )}

      {/* suborder by paymentAgreement */}
      {isPaymentAgreement && !paymentAgreementId && (
        <IconButton color='primary' onClick={onPaymentAgreement} tooltip={t('paymentAgreement:goPaymentAgreement')}>
          <HandshakeOutlined />
        </IconButton>
      )}
    </Stack>
  );
};

export default memo(OrderCodeCell);
