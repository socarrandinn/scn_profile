import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { IOrderStatus } from 'modules/orders/settings/order-status/interfaces';
import Connector from './Conector';
import StepComponent from './Step';

interface IOrderStatusStepper {
  activeStep: number;
  steps: IOrderStatus[] | null
}

const OrderStatusStepper = ({ activeStep, steps }: IOrderStatusStepper) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel connector={<Connector/>}>
        {steps?.map((status) => (
          <Step key={status._id}>
            <StepLabel StepIconComponent={StepComponent}>{status.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default OrderStatusStepper
