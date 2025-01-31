import { Stack } from '@mui/material';
import { memo, useState } from 'react';
import DotsStepper from './DotsStepper';
import SimpleBannerOptions from '../SimpleBannerOptions';

type Props = {
  filed: any;
  options: any[];
};
const SliderBannerOptions = ({ filed, options }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Stack
      sx={{
        width: '100%',
        gap: 2,
      }}
    >
      <SimpleBannerOptions filed={filed} bannerId={options[activeStep]} />
      <DotsStepper {...{ activeStep, setActiveStep }} steps={options?.length} />
    </Stack>
  );
};

export default memo(SliderBannerOptions);
