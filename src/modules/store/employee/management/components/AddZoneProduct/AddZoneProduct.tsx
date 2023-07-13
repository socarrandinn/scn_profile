import { Grid } from '@mui/material';
import { ZoneInput } from 'modules/common/components/ZoneSelect';

type AddZoneProductProps = {
  state?: string;
};
const AddZoneProduct = ({ state }: AddZoneProductProps) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <ZoneInput stateValue={state} name={'zone'} required />
      </Grid>
    </Grid>
  );
};

export default AddZoneProduct;
