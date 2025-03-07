import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  paid: boolean;
};

const OrderPaymentPaidCell = ({ paid }: Props) => {
  const { t } = useTranslation('order');
  const label = paid ? t('order:statusPaid.paid') : t('order:statusPaid.notPaid');
  return <Typography>{label}</Typography>;
};

export default OrderPaymentPaidCell;
