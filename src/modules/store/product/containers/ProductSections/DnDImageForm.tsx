import { Grid } from '@mui/material';
import DragAndDropImage from 'modules/store/common/components/DragAndDropImage/DragAndDropImage';

const DnDImageForm = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <DragAndDropImage />
      </Grid>
    </Grid>
  );
};

export default DnDImageForm;
