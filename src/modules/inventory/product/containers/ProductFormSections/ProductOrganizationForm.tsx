import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CategorySelect } from 'modules/inventory/settings/category/components/CategorySelect';
import { SupplierSelect } from 'modules/inventory/provider/supplier/components/SupplierSelect';

const ProductOrganizationForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <CategorySelect name={'category'} label={t('fields.category')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <SupplierSelect name='providers.supplier' label={t('fields.supplier')} />
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
