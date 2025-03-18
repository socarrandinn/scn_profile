import { memo } from 'react';
import { UseFormWatch } from 'react-hook-form';
import OfferCategoryFromRule from './OfferCategoryFromRule';
import { Stack } from '@mui/material';

type OfferCategoryFromProps = {
  section: boolean;
  control: any;
  watch: UseFormWatch<any>;
  setError: any;
  resetField: any;
  errors: any;
  clearErrors: any;
};

const OfferCategoryFrom = ({ control, section, errors, clearErrors, ...props }: OfferCategoryFromProps) => {
  console.log(errors);

  return (
    <Stack gap={3}>
      <OfferCategoryFromRule control={control} errors={errors} clearErrors={clearErrors} section={section} {...props} />
    </Stack>
  );
};

export default memo(OfferCategoryFrom);
