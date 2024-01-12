import { OrderStatusStepper } from '../components/OrderStatusStepper';
import { Paper } from '@mui/material';
import { useFindOrderStatuses } from '../hooks/useFindOrderStatuses';
import { IOrderStatus } from '../interfaces';

const OrderStatusStepperContainer = () => {
  const { data } = useFindOrderStatuses();

  return (
    <Paper sx={{ padding: '1rem', margin: '1rem auto', width: '100%' }}>
      <OrderStatusStepper activeStep={1} steps={
        data?.data?.filter((status: IOrderStatus) => {
          return status.tracking
        })?.sort((a: IOrderStatus, b: IOrderStatus) => a.order - b.order) || null}/>
    </Paper>
  );
};

export default OrderStatusStepperContainer;
