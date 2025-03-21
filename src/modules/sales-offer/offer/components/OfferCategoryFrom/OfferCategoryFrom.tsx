import { memo } from 'react';
import { UseFormWatch } from 'react-hook-form';
import OfferCategoryFromRule from './OfferCategoryFromRule';

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
  return (
    <OfferCategoryFromRule control={control} errors={errors} clearErrors={clearErrors} section={section} {...props} />
  );
};

export default memo(OfferCategoryFrom);
