import { useToggle } from '@dfl/hook-utils';
import { Checkbox, FormControlLabel } from '@mui/material';
import { ConfirmAction } from 'components/ConfirmAction';
import { memo } from 'react';
import { useUpdatePaymentMethodStatus } from '../../hooks/useUpdatePaymentMethodStatus';

const PaymentMethodActiveCheckbox = ({ id, value }: { id: string, value: boolean }) => {
  const { mutate, isLoading } = useUpdatePaymentMethodStatus(id, value);
  const { isOpen, onClose, onOpen } = useToggle();
  const isChecked = value !== undefined ? value : false;

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            onChange={onOpen}
            checked={isChecked}
            name={'enabled'}
            disabled={isLoading}
          />
        }
        label={undefined}
      />
      <ConfirmAction onClose={onClose} open={isOpen} onConfirm={mutate} />
    </>
  );
};

export default memo(PaymentMethodActiveCheckbox);
