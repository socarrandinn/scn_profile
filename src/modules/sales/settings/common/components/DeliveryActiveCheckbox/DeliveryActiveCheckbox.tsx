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
  const isChecked = value !== undefined ? value : false;

  return (
    <>
      <FormControlLabel
        control={
          <IphoneSwitch
            onChange={onOpen}
            checked={isChecked}
            name={'enabled'}
            disabled={isLoading}
            label={undefined}
            sx={{ ml: 2 }}
          />
        }
        label={undefined}
      />
      <ConfirmAction onClose={onClose} open={isOpen} onConfirm={onCheckboxChange} />
    </>
  );
};

export default memo(DeliveryActiveCheckbox);
