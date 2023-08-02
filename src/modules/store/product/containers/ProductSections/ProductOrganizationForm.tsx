import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectProductProviderAutocomplete } from 'modules/store/product/components/SelectProductProviderAutocomplete';

const ProductOrganizationForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormTextField
          fullWidth
          autoFocus
          required
          name='category'
          label={t('section.summary.organization.labelCategory')}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <SelectProductProviderAutocomplete name="productProvider" />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField
          fullWidth
          autoFocus
          name='section.summary.organization.labelTags'
          label={t('section.summary.organization.labelTags')}
        />
      </Grid>
    </Grid>
  );
};

export default ProductOrganizationForm;
