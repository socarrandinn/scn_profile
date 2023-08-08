import { Grid } from '@mui/material';
import { ZoneInput } from 'modules/common/components/ZoneSelect';
// import { SkillsFieldArray } from 'modules/common/components/ZoneSelect/ZoneInput';

type AddZoneProductProps = {
  state?: string;
};
const AddZoneProduct = ({ state }: AddZoneProductProps) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
         <ZoneInput stateValue={state} name={'zone'} required />
        {/* <SkillsFieldArray stateValue={state} name={'zone'} /> */}
      </Grid>
    </Grid>
  );
};

export default AddZoneProduct;
