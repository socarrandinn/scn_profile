import { useToggle } from '@dfl/hook-utils';
import { Box, FormControlLabel } from '@mui/material';
import { ConfirmAction } from 'components/ConfirmAction';
import { memo } from 'react';
import { IphoneSwitch } from './styled';

type DeliveryActiveCheckboxProps = {
  value?: boolean;
  isLoading?: boolean;
  onCheckboxChange: () => void;
};


const DeliveryActiveCheckbox = ({
  isLoading,
  value,
  onCheckboxChange,
}: DeliveryActiveCheckboxProps) => {
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <Box>
      <FormControlLabel
        control={isLoading ? <IphoneSwitch disabled sx={{ ml: 2 }} label={undefined} />
          : <IphoneSwitch
            onChange={onOpen} checked={value} name={'enabled'} label={undefined} sx={{ ml: 2 }} />}
        label={undefined} />
      <ConfirmAction onClose={onClose} open={isOpen} onConfirm={onCheckboxChange} />
    </Box>
  );
};

export default memo(DeliveryActiveCheckbox);
