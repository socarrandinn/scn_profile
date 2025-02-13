import { Stack } from '@mui/material';
import { memo, useState } from 'react';
import DotsStepper from './DotsStepper';
import SimpleBannerOptions from '../SimpleBannerOptions';

type Props = {
  options: any[];
};
const SliderBannerOptions = ({ options }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Stack
      sx={{
        width: '100%',
        gap: 2,
      }}
    >
      <SimpleBannerOptions banner={options?.[activeStep]} bannerId={options[activeStep]?._id} />
      <DotsStepper {...{ activeStep, setActiveStep }} steps={options?.length} />
    </Stack>
  );
};

export default memo(SliderBannerOptions);
