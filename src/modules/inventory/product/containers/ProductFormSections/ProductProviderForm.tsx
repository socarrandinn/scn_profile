import { FormSwitchField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SupplierSelect } from 'modules/inventory/provider/supplier/components/SupplierSelect';
import { ManufactureSelect } from 'modules/inventory/provider/manufacture/components/ManufactureSelect';

type ProductProviderFormProps = {
  isEdit?: boolean;
};
const ProductProviderForm = ({ isEdit }: ProductProviderFormProps) => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <SupplierSelect required name='providers.supplier' label={t('fields.supplier')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <ManufactureSelect required name='providers.manufacturer' label={t('fields.manufacturer')} />
      </Grid>
      {!isEdit ? (
        <Grid item xs={12} md={12}>
          <FormSwitchField name='visible' label={t('fields.visibility')} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default ProductProviderForm;
