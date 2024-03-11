import { useToggle } from '@dfl/hook-utils';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { ConfirmAction } from 'components/ConfirmAction';
import React, { memo } from 'react';

type DeliveryActiveCheckboxProps = {
  label: string;
  description: string;
  onCheckboxChange: () => void;
};

const DeliveryActiveCheckbox = ({ label, description, onCheckboxChange }: DeliveryActiveCheckboxProps) => {
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <Box>
      <FormControlLabel control={<Checkbox onChange={onOpen} />} label={label} />
      <Typography color={'gray'}>{description}</Typography>
      <ConfirmAction onClose={onClose} open={isOpen} onConfirm={onCheckboxChange} />
    </Box>
  );
};

export default memo(DeliveryActiveCheckbox);
