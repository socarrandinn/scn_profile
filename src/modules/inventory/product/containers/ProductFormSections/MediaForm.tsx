import { Grid } from '@mui/material';
import { FormMultipleMediaUploaderField } from 'modules/inventory/common/components/MediaUploader/FormMultipleMediaUploaderField';

const MediaForm = () => {
  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} md={12}>
                <FormMultipleMediaUploaderField name={'media'}/>
            </Grid>
        </Grid>
  );
};

export default MediaForm;
