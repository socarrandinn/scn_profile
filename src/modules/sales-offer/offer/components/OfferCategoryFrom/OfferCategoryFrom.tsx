import { memo } from 'react';
import OfferCategoryFromRule from './OfferCategoryFromRule';

type OfferCategoryFromProps = {
  section: boolean;
  control: any;
  errors: any;
};

const OfferCategoryFrom = ({ control, section, errors }: OfferCategoryFromProps) => {
  return <OfferCategoryFromRule control={control} errors={errors} section={section} name='rulesAmountsCategory' />;
};

export default memo(OfferCategoryFrom);
