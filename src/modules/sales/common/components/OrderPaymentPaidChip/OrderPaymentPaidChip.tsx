import { Switch } from '@mui/material';

type Props = {
  paid: boolean;
};

const OrderPaymentPaidChip = ({ paid }: Props) => {
  return <Switch checked={paid} className='pointer-events-none' />;
};

export default OrderPaymentPaidChip;
