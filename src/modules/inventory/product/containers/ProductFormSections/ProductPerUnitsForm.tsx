import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProductPerUnitsForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField name='productPerUnit.amount' label={t('section.productPerUnit.amount')} required fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField name='productPerUnit.measurements' label={t('section.productPerUnit.measurements')} required fullWidth />
      </Grid>
    </Grid>
  );
};

export default ProductPerUnitsForm;
