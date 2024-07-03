import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CategorySelect } from 'modules/inventory/settings/category/components/CategorySelect';
import { FormProductKeyworsField } from '../../components/ProductKeywordsImput';

type ProductOrganizationFormProps = {
  isEdit?: boolean;
};
const ProductOrganizationForm = ({ isEdit }: ProductOrganizationFormProps) => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12} xl={4}>
        <CategorySelect required name={'category'} label={t('fields.category')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormProductKeyworsField size='medium' name='keywords' label='section.summary.organization.labelTags' />
      </Grid>
    </Grid>
  );
};

export default ProductOrganizationForm;
