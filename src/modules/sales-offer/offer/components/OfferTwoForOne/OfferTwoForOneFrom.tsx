import { memo } from 'react';
import OfferTwoForOneFromRule from './OfferTwoForOneFromRule';

type Props = {
  control: any;
  errors: any;
  name: string;
};

const OfferTwoForOneFrom = ({ control, errors, name }: Props) => {
  return <OfferTwoForOneFromRule control={control} errors={errors} name={name} />;
};

export default memo(OfferTwoForOneFrom);
