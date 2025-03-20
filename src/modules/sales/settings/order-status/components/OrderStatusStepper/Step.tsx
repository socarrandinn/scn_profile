import styled from '@emotion/styled';
import { StepIcon, stepIconClasses, useTheme } from '@mui/material';

const StepComponent = styled(StepIcon)(() => {
  const theme = useTheme();

  return {
    [`&.${stepIconClasses.completed}`]: {
      color: theme.palette.success.main,
      zIndex: 999,
    },
    [`&.${stepIconClasses.active}`]: {
      color: theme.palette.success.main,
    },
  };
});

export default StepComponent;
