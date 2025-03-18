import { memo } from 'react';
import { UseFormWatch } from 'react-hook-form';
import OfferProductFromRule from './OfferProductFromRule';
import { Stack } from '@mui/material';

type OfferProductFromProps = {
  section: boolean;
  control: any;
  watch: UseFormWatch<any>;
  setError: any;
  resetField: any;
  errors: any;
  clearErrors: any;
  setValue: any;
};

const OfferProductFrom = ({ control, section, errors, clearErrors, setValue, ...props }: OfferProductFromProps) => {
  return (
    <Stack gap={3}>
      <OfferProductFromRule control={control} errors={errors} clearErrors={clearErrors} section={section} {...props} />
    </Stack>
  );
};

export default memo(OfferProductFrom);
