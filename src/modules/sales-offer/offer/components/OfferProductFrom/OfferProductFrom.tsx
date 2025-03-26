import { memo } from 'react';
import OfferProductFromRule from './OfferProductFromRule';

type OfferProductFromProps = {
  section: boolean;
  control: any;
  errors: any;
};

const OfferProductFrom = ({ control, section, errors }: OfferProductFromProps) => {
  return <OfferProductFromRule control={control} errors={errors} section={section} name='rulesProducts' />;
};

export default memo(OfferProductFrom);
