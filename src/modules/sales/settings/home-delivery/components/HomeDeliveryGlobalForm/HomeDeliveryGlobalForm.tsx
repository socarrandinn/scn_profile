import { Grid } from '@mui/material';
import { memo } from 'react';
import { ShippingCostForm } from 'modules/sales/settings/common/components/ShippingCostForm';
import { ShippingTimeForm } from 'modules/sales/settings/common/components/ShippingTimeForm';

type Props = {
  disabled?: boolean,
}
const HomeDeliveryGlobalForm = ({ disabled }: Props) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <ShippingCostForm disabled={disabled} mdProps={{ price: 1.5, weightPrice: 3.5, volumePrice: 3.5 }} />
      <Grid item xs={12} md={3.5}>
        <ShippingTimeForm disabled={disabled} />
      </Grid>
    </Grid >
  );
};

export default memo(HomeDeliveryGlobalForm);
