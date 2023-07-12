import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const RelatedProductForm = () => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormTextField fullWidth autoFocus required name='section.summary.relatedProducts.label' label={t('section.summary.relatedProducts.label')} />
      </Grid>
    </Grid>
  );
};

export default RelatedProductForm;