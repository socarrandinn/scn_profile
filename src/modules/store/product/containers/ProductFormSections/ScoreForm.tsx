import { Grid } from '@mui/material';
import FormProductScoreField from 'modules/store/product/components/FormProductScoreField/FormProductScoreField';

const ScoreForm = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormProductScoreField />
      </Grid>
    </Grid>
  );
};

export default ScoreForm;
