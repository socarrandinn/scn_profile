import { memo } from 'react';
import { UseFormWatch } from 'react-hook-form';
import { Stack } from '@mui/material';
import OfferTwoForOneFromRule from './OfferTwoForOneFromRule';

type Props = {
  control: any;
  watch: UseFormWatch<any>;
  setError: any;
  resetField: any;
  errors: any;
  clearErrors: any;
  name: string;
};

const OfferTwoForOneFrom = ({ control, errors, clearErrors, ...props }: Props) => {
  return (
    <Stack gap={3}>
      <OfferTwoForOneFromRule control={control} errors={errors} clearErrors={clearErrors} {...props} />
    </Stack>
  );
};

export default memo(OfferTwoForOneFrom);
