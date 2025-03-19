import { memo } from 'react';
import { UseFormWatch } from 'react-hook-form';
import OfferProductFromRule from './OfferProductFromRule';

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
    <OfferProductFromRule control={control} errors={errors} clearErrors={clearErrors} section={section} {...props} />
  );
};

export default memo(OfferProductFrom);
