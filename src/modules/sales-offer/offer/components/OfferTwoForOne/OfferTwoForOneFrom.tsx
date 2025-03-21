import { memo } from 'react';
import { Stack } from '@mui/material';
import OfferTwoForOneFromRule from './OfferTwoForOneFromRule';

type Props = {
  control: any;
  errors: any;
  name: string;
};

const OfferTwoForOneFrom = ({ control, errors, name }: Props) => {
  return (
    <Stack gap={3}>
      <OfferTwoForOneFromRule control={control} errors={errors} name={name} />
    </Stack>
  );
};

export default memo(OfferTwoForOneFrom);
