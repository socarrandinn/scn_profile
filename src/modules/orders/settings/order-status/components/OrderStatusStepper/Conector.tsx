import styled from '@emotion/styled';
import { StepConnector, useTheme, stepConnectorClasses } from '@mui/material';

const Connector = styled(StepConnector)(() => {
  const theme = useTheme()
  return {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.success.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.success.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderTopWidth: 7,
      borderRadius: 1,
    },
  };
});

export default Connector
