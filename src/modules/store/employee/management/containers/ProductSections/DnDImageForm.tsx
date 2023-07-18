import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DragAndDropImage from 'modules/store/employee/management/components/DragAndDropImage/DragAndDropImage';


const DnDImageForm = () => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <DragAndDropImage />
      </Grid>
    </Grid>
  );
};

export default DnDImageForm;