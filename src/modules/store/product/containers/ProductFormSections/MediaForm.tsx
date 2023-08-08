import { Grid } from '@mui/material';
import { FormMediaUploaderField } from 'modules/store/common/components/MediaUploader/FormMediaUploaderField';

const MediaForm = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormMediaUploaderField name={'images'} />
      </Grid>
    </Grid>
  );
};

export default MediaForm;
