import { useToggle } from '@dfl/hook-utils';
import { Box, Checkbox, FormControlLabel, Skeleton, Typography } from '@mui/material';
import { ConfirmAction } from 'components/ConfirmAction';
import React, { memo } from 'react';

type DeliveryActiveCheckboxProps = {
  label: string;
  description: string;
  value?: boolean;
  isLoading?: boolean;
  onCheckboxChange: () => void;
};

const DeliveryActiveCheckbox = ({
  label,
  isLoading,
  value,
  description,
  onCheckboxChange,
}: DeliveryActiveCheckboxProps) => {
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <Box>
      <FormControlLabel
        control={isLoading ? <Skeleton variant='rectangular' width={20} height={20} sx={{ margin: 1.5 }} />
          : <Checkbox onChange={onOpen} checked={value} />}
        label={label} />
      <Typography color={'subtitle2'}>{description}</Typography>
      <ConfirmAction onClose={onClose} open={isOpen} onConfirm={onCheckboxChange} />
    </Box>
  );
};

export default memo(DeliveryActiveCheckbox);
