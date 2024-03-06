import { Box, FormControlLabel, Switch, Typography } from '@mui/material';
import React, { memo } from 'react';

type DeliveryActiveCheckboxProps = {
  label: string;
  description: string;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DeliveryActiveCheckbox = ({ label, description, onCheckboxChange }: DeliveryActiveCheckboxProps) => {
  return (
    <Box>
      <FormControlLabel control={<Switch onChange={onCheckboxChange} />} label={label} />
      <Typography color={'gray'}>{description}</Typography>
    </Box>
  );
};

export default memo(DeliveryActiveCheckbox);
