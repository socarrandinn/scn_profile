import { FormSwitchField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CategorySelect } from 'modules/inventory/settings/category/components/CategorySelect';
import { SupplierSelect } from 'modules/inventory/provider/supplier/components/SupplierSelect';
import { FormProductKeyworsField } from 'modules/inventory/product/components/ProductKeywordsImput/';

type ProductOrganizationFormProps = {
  isEdit?: boolean;
};
const ProductOrganizationForm = ({ isEdit }: ProductOrganizationFormProps) => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <CategorySelect required name={'category'} label={t('fields.category')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <SupplierSelect required name='providers.supplier' label={t('fields.supplier')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormProductKeyworsField name='keywords' label='section.summary.organization.labelTags' />
      </Grid>
      {!isEdit ? (
        <Grid item xs={12} md={12}>
          <FormSwitchField name='visible' label={t('fields.visibility')} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default ProductOrganizationForm;
